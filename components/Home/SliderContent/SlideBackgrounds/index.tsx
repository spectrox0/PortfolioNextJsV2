import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  startCarousel: Function,
  active: boolean,
  bg: string
}
interface PropsStyled {
  className?: string,
  bg: string,
  active: boolean
}
export default function SlideBg({ startCarousel, active, bg }: Props) {
  React.useEffect(() => {
    let interval
    if (active) interval = setInterval(startCarousel, 8000)
    else clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [active])

  return (
    <StyleSlide
      className={active ? 'active' : ''}
      bg={bg}
      active={active}
    ></StyleSlide>
  )
}

const animation = keyframes`
from {
  transform: translate3d(0, 0, 0) scale(1.15);
 
}
to {
    transform: translate3d(0, 0, 0) scale(1);
}
`
const StyleSlide = styled.div<PropsStyled>`
  height: 100%;
  width: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  z-index: ${({ active }) => (active ? 3 : 1)};
  transition: opacity 1s linear;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate3d(0, 0, 0);

  &:nth-child(1) {
    transform-origin: top right;
  }
  &:nth-child(2) {
    transform-origin: bottom left;
  }
  &:nth-child(3) {
    transform-origin: center right;
  }

  &:after {
    content: '';
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.5;
  }
  &.active {
    animation: ${animation} 8s linear forwards;
  }
`
