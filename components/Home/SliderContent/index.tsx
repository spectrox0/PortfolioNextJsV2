import React, { useState } from 'react'
import Slide from './SlideText'
import styled from 'styled-components'
import { primaryColor } from '../../../helpers/styles'
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
        <h1>
          Hi I'm Alejandro <span className="word2"> Velazco</span>{' '}
        </h1>{' '}
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
          <span> My Works</span>
        </Link>
        <Link href="/contact">
          <span> Contact Me</span>
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
  h1 {
    position: relative;
    padding: 0;
    margin: 0;
    letter-spacing: 0.1em;
    width: auto;
    font-weight: 400;
    color: white;
    text-transform: uppercase;

    font-size: 3em;
    font-weight: 400;
    margin-bottom: 1rem;
    .word2 {
      display: inline-block;
      font-weight: 700;
      color: ${primaryColor};
    }
  }
  .options {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    span {
      text-transform: uppercase;
      color: #fff;
      display: flex;
      align-items: center;
      text-align: center;
      margin: 0.5rem;

      justify-content: center;
      padding: 0.7rem;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 0.1em;
      font-size: 1.1em;
      border: solid 1px rgba(255, 255, 255, 0.3);
      transition: all 0.3s linear;
      &:first-child,
      &:hover {
        color: ${primaryColor};
        border-color: ${primaryColor};
      }
      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
`
