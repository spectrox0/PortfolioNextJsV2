import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
import React from 'react'
import '../firebase.config'
import Layout from '../components/Layouts'
import '../assets/scss/index.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import {AnimatePresence} from 'framer-motion'
import Loading from '../components/LoadingRoute'
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router";
import en from '../locale/en.json'
import es from '../locale/es.json'

const MyApp = ({Component, pageProps, router}: AppProps) => {
    const messages = {
        en,
        es
    }
    const store = useStore(pageProps.initialReduxState)
    const {locale = 'en'} = useRouter()
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Provider store={store}>
                <Layout>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                    <Loading/>
                </Layout>
            </Provider>
        </IntlProvider>)
}
export default MyApp;
