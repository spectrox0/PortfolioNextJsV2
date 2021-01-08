import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  delay: number,
  children?: React.ReactElement | string
}
interface PropsStyled {
  delay: number
}
export default function Letter({ delay, children }: Props) {
  return children !== ' ' ? (
    <LetterS delay={delay}>{children}</LetterS>
  ) : (
      <> &nbsp; </>
    )
}

const enter = keyframes`
from{
    opacity:0;
    transform: rotateY(-90deg) translate3d(5rem, 0, 0);
    left: 5rem;
}
to{
    opacity:1;
    left: 0;
    transform:translate3d(0, 0, 0);
}
`
const exit = keyframes`
from {
    opacity:1;
    left:0;
}
  to {
    opacity:0;
    left:-10%;
  }
`
const LetterS = styled.span<PropsStyled>`
  display: flex;
  position: relative;
  font-weight: 300;
  left: 5rem;
  opacity: 0;
  animation: ${enter} 1s linear ${({ delay }) => delay + 'ms'} both,
    ${exit} 1s linear ${({ delay }) => +delay + 4000 + 'ms'} forwards;
`
