import React from 'react'
import styled, { keyframes } from 'styled-components'
import { primaryColor } from '../helpers/styles'
import { motion } from 'framer-motion'
export default function Loading() {
  return (
    <motion.div
      key="loading-child"
      id="loading"
      className="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className="spinner3"></div>
      <div className="spinner3-inner"></div>
    </motion.div>
  )
}
