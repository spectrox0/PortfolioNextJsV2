import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import React from 'react'
import '../firebase.config'
import Layout from '../components/Layouts'
import '../assets/scss/index.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { AnimatePresence } from 'framer-motion'
import Loading from '../components/LoadingRoute'


const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Loading />
      </Layout>
    </Provider>)
}
export default MyApp
