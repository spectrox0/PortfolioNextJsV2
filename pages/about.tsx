import React from 'react'
import {AboutMe} from '@/templates/AboutMe'
import Head from 'next/head'

const About:React.FC = () =>{
  return (
    <>
        <Head>
            <title>Alejandro Velazco</title>
        </Head>
        <AboutMe/>

    </>
  )
}
export default About
