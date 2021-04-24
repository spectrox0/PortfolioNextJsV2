import React from 'react'
import {HomeTemplate} from '@/templates/Home'
import Head from 'next/head'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio Alejandro Velazco</title>
      </Head>
      <HomeTemplate />
    </>
  )
}

export default Home;
