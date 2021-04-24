import React from 'react'
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {ServerStyleSheets} from '@material-ui/styles';

interface Props {
    styleTags: any
}

class MyDocument extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const materialSheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(materialSheets.collect(<App {...props} />)),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
    render() {
        const { styleTags } = this.props
        const {locale} = this.props.__NEXT_DATA__
        console.log(locale)
        return (
            <Html lang={locale}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    {styleTags}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="shortcut icon" href="/ico/alien.ico" />
                    <meta
                        name="description"
                        content="Portfolio Alejandro Velazco, Full Stack Developer"
                    />
                    <meta property="og:title" content="Portfolio Alejandro Velazco" />
                    <meta
                        name="og:description"
                        content="Portfolio Alejandro Velazco Full Stack Developer"
                    />
                    <meta
                        name="keywords"
                        content="alejandro velazco,web,designer,developer,system,portfolio,react,vue,angular,nodejs,portfolio"
                    />

                    <meta
                        property="og:description"
                        content="Portfolio Alejandro Velazco"
                    />
                    <meta property="og:image" content={'images/bg/bg8.jpg'} />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-145358412-2"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-145358412-2');
        `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
