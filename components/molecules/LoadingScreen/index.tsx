import { AnimatePresence } from 'framer-motion'
import React from 'react'

import {Spinner} from '../../atoms/Spinner/Common'
import { ContainerLoadingScreen } from './styles'

interface Props {
  loading: boolean
}
export const LoadingScreen: React.FC<Props> = ({loading})  =>{
  return (
    <AnimatePresence> {
      loading && (
    <ContainerLoadingScreen
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
     <Spinner />
    </ContainerLoadingScreen>) }
    </AnimatePresence>
  )
}
