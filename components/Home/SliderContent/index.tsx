import React, { useState } from 'react'
import Slide from './SlideText'
import styled from 'styled-components'
import { primaryColor } from '../../../helpers/styles'
import {Title} from '../../../styles/titles'
import {Btn} from '../../../styles/buttons'
import Link from 'next/link'
export default function SliderContent() {
  const [current, setCurrent] = useState<number>(0)
  const goRight = () => {
    setCurrent(current == elements.length - 1 ? 0 : current + 1)
  }

  const elements: string[] = [
    'Systems Engineer',
    'Fullstack developer',
  ]
  return (
    <StyleContent>
      <div className="text">
        <Title margin="0 0 1rem 0" >
          Hi I'm Alejandro <span className="word2"> Velazco</span>{' '}
        </Title>
        {elements.map((element, index) =>
          current == index &&
          <Slide
            text={element}
            key={element}
            startCarousel={goRight}
          />
        )}
      </div>
      <div className="options">
        <Link href="/works">
          <Btn color={primaryColor}> My Works</Btn>
        </Link>
        <Link href="/contact">
          <Btn> Contact Me</Btn>
        </Link>
      </div>
    </StyleContent>
  )
}

const StyleContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 2;
  justify-content: center;
  .text {
    position: relative;
    flex-direction: column;
    padding: 0.5rem;
  }
  
  .options {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    
  }
`
