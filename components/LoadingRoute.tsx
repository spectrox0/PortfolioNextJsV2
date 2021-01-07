import React from 'react'
import Router from 'next/router'
import LoadingSpinner from './Loading'
export default function Loading() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [loadingClient, setLoadingClient] = React.useState<boolean>(true)

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
  })

  return (loading || loadingClient)? <LoadingSpinner /> : null
}
