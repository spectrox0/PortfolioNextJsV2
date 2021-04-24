import styled, {keyframes} from "styled-components";
import {paletteColor} from "@/styles/variables"

const animation = keyframes`
  0% {
    transform: rotate(360deg)  translate3d(0,0,0);;
    opacity: 1;
  }
  50% {
    opacity: 0.25;
    transform: rotate(180deg)  translate3d(0,0,0);;
  }
  100% {
    opacity: 1;
    transform: rotate(0deg)  translate3d(0,0,0);;
  }
`


export const ContainerSpinner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .spinner3 {
    display: block;
    position: relative;
    height: 4rem;
    width: 4rem;
    border: 3px solid transparent;
    border-top-color: ${paletteColor.primaryColor};
    border-bottom-color: ${paletteColor.primaryColor}
    background-clip: padding-box;
    border-radius: 50%;
    animation: ${animation} 2s linear infinite;
  }

  .spinner3-inner {
    display: block;
  
    position: absolute;
    height: 2.2rem;
    width: 2.2rem;
    border: 2px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: ${animation} 1.5s linear infinite reverse;
  }

`
