import React from 'react'
import Slides from './SliderContent'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Slider() {
  return (
    <SliderS
      id="home"
      animate="enter"
      initial="initial"
      exit="exit"
      variants={HomeVariant}
    >
      <div className="container">
        <Slides />
      </div>
    </SliderS>
  )
}
const HomeVariant = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
  exit: {
    opacity: 0,
  },
}
const SliderS = styled(motion.section)`
  transform: translate3d(0, 0, 0);
  z-index: 5;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  padding: 1rem;
  overflow: hidden;
  .container {
    flex: 1;
    z-index: 5;
  }
`
