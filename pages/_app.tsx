import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
import React from 'react'
import '../firebase.config'
import {Layout} from '@/templates/Layout'
import 'react-perfect-scrollbar/dist/css/styles.css'

import {AnimatePresence} from 'framer-motion'
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router";
import en from '../locale/en.json'
import es from '../locale/es.json'
import {LoadingRoute} from "../components/molecules/LoadingRoute";
import {GlobalStyle} from "../styles/global";
import {ThemeProvider} from "@material-ui/core";
import {theme} from "../styles/variables";
import 'react-awesome-slider/dist/styles.css';


const MyApp: React.FC<AppProps> = ({
                                       Component,
                                       pageProps,
                                       router
                                   }) => {
    const messages = {
        en,
        es
    }
    const store = useStore(pageProps.initialReduxState)
    const {locale = 'en'} = useRouter()
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Layout>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                    <LoadingRoute/>
                </Layout>
                </ThemeProvider>
            </Provider>
        </IntlProvider>)
}
export default MyApp;
