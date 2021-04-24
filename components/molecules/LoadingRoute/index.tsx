import * as React from 'react'
import Router from 'next/router'
import {LoadingScreen} from '../LoadingScreen'
import {useSelector} from "react-redux";

export const LoadingRoute: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const [loadingClient, setLoadingClient] = React.useState<boolean>(true)

    // @ts-ignore
    const {loading: loadingGlobal} = useSelector(state => ({
        ...state,
    }))
    React.useEffect(() => {
        setLoadingClient(false)
        Router.events.on('routeChangeStart', () => {
            setLoading(true)
        })

        Router.events.on('routeChangeComplete', () => {
            setLoading(false)
        })

        Router.events.on('routeChangeError', () => {
            setLoading(false)
        })
        return () => {
            Router.events.off('routeChangeStart', () => {
                setLoading(true)
            })
            Router.events.off('routeChangeComplete', () => {
                setLoading(false)
            })
            Router.events.off('routeChangeError', () => {
                setLoading(false)
            })
        }
    }, [])

    return <LoadingScreen loading={loading || loadingClient || loadingGlobal}/>
}
