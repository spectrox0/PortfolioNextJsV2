import React from 'react'
import Letter from '@/atoms/LetterAnimation'
import {ContainerSlideText} from "./styles";

interface Props {
  startCarousel: () => void,
  text: string,
  current?: number,
  index?: number,
}

export const  SlideText :React.FC<Props> = ({
  startCarousel,
  index,
  current,
  text,
}) => {
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
    <ContainerSlideText fontSize={text.length>17? '1.2em': '1.5em'}>
      {textArray.map((letter, i) => (
        <Letter key={i} delay={i * 100}>
          {letter}
        </Letter>
      ))}
    </ContainerSlideText>
  )
}


