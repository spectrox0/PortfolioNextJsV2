import React from 'react'
import styled from 'styled-components'
import Letter from './LetterAnimation'

interface Props {
  startCarousel: () => void,
  text: string,
  current?: number,
  index?: number,
}
interface PropsStyled {
    fontSize?: string
}
export default function Slides({
  startCarousel,
  index,
  current,
  text,
}: Props) {
  React.useEffect(() => {
    let interval
 console.log(text.length*250)
    if (current == index) interval = setInterval(startCarousel, text.length *400)
    else clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [current])

  const textArray: string[] = Array.from(text)

  return (
    <StyleSlide fontSize={text.length>17? '1.2em': '1.5em'}>
      {textArray.map((letter, i) => (
        <Letter key={i} delay={i * 100}>
          {letter}
        </Letter>
      ))}
    </StyleSlide>
  )
}

const StyleSlide = styled.p<PropsStyled>`
  transform: translate3d(0px, 0px, 0px);
  display: flex;
  position: absolute;
  display: -webkit-box;
  letter-spacing: 0.15em;
  font-weight: 300;
  font-size: ${({fontSize})=> fontSize};
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
`
