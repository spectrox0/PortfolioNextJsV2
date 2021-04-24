import React from 'react'
import styled from 'styled-components'
import {primaryColor} from '../helpers/styles'
import Head from 'next/head'
import {motion} from 'framer-motion'

const Error = () => {
  return (
      <ErrorS
          animate={{opacity: 1, scale: 1, transition: {duration: 0.5}}}
          initial={{opacity: 0, scale: 0.5}}
          exit={{opacity: 0}}
      >
        <Head>
          <title>500 - Server-side error occurred</title>
        </Head>
        <h1>
          Error <span> 500 </span>
        </h1>
    </ErrorS>
  )
}
export default Error;
const ErrorS = styled(motion.section)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    letter-spacing: 0.15em;
    font-size: 3em;
    font-weight: 400;
    text-transform: uppercase;
    padding: 1rem;
    border: solid 1px #fff;
    background: rgba(10, 10, 10, 0.5);
    margin: 0;
    span {
      font-size: 1.5em;
      color: ${primaryColor};
      font-weight: 700;
    }
  }
`

