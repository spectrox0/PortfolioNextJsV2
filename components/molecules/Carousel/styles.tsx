import styled from "styled-components";

import AwesomeSlider from 'react-awesome-slider'
import {paletteColor} from "../../../styles/variables";

export const ContainerCarousel = styled(AwesomeSlider)`

  .item-carousel {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: center center;
    }
  }


  --slider-height-percentage: 70%;
  --slider-transition-duration: 770ms;
  --organic-arrow-thickness: 4px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 30px;
  --organic-arrow-color: #fff; 
  --control-button-width: 10%;
  --control-button-height: 100%;
  --control-button-background: transparent;
  --control-bullet-color: rgba(255, 255, 255, 0.8);
  --control-bullet-active-color: #fff;
  --loader-bar-color: ${paletteColor.primaryColor};
  --loader-bar-height: 2px;
  --content-background-color: transparent;
`
