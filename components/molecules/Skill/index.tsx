import React from 'react'
import styled, { keyframes } from 'styled-components'
import { primaryColor } from '../../../helpers/styles'
import {Icon} from '../../atoms/Icon'
import { motion } from 'framer-motion'
import {ContainerSkill} from "./styles";
interface Props {
  delay: number
  name: string
  progress: number
}
export const Skill:React.FC<Props> = ({ delay, name, progress }) => {
  const VariantLine = {
    initial: {
      width: 0,
      opacity: 0,
    },
    enter: {
      opacity: 1,
      width: `${progress}%`,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  }
  const VariantSkill = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }
  return (
    <ContainerSkill animate="enter" initial="initial" variants={VariantSkill}>
      <span className="label">
        <span className="icon"> <Icon name={name.toLowerCase()} /></span>
        <span className="name">{name}</span>
        <span className="progress">{progress}%</span>
      </span>

      <div className="line">
        <motion.div variants={VariantLine} className="line-progress" >
        </motion.div>
      </div>
    </ContainerSkill>
  )
}

