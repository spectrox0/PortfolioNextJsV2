import React from 'react'
import {ContainerLetter} from "./styles";

interface Props {
  delay: number,
  children?: React.ReactElement | string
}

export default function Letter({ delay, children }: Props) {
  return children !== ' ' ? (
    <ContainerLetter delay={delay}>{children}</ContainerLetter>
  ) : (
      <> &nbsp; </>
    )
}

