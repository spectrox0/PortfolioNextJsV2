import React from 'react'
import styled, { keyframes } from 'styled-components'
import { primaryColor } from '../../../../helpers/styles'
import Letter from './LetterAnimation'

interface Props {
  startCarousel: Function,
  text: string,
  current?: number,
  index?: number,
}
export default function Slides({
  startCarousel,
  index,
  current,
  text,
}: Props) {
  React.useEffect(() => {
    let interval

    if (current == index) interval = setInterval(startCarousel, 6500)
    else clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [current])

  const [textArray, setText] = React.useState<string[]>(Array.from(text))

  return (
    <StyleSlide>
      {textArray.map((letter, i) => (
        <Letter key={i} delay={i * 100}>
          {letter}
        </Letter>
      ))}
    </StyleSlide>
  )
}

const StyleSlide = styled.p`
  transform: translate3d(0px, 0px, 0px);
  display: flex;
  position: absolute;
  display: -webkit-box;
  letter-spacing: 0.15em;
  font-weight: 300;
  font-size: 1.5em;
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
`
