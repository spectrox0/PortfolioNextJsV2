import React from 'react'
import AboutMe from '../components/AboutMe'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro Velazco</title>
      </Head>
      <AboutMe />
    </>
  )
}
