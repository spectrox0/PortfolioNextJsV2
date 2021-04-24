import React from 'react'
import Head from 'next/head'
import {ContactTemplate} from "../components/templates/Contact";

const ContactMe: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Alejandro Velazco</title>
      </Head>
      <ContactTemplate />
    </>
  )
}
export default ContactMe;
