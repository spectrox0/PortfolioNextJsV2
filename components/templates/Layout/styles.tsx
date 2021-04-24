import styled from "styled-components";
import {paletteColor} from "../../../styles/variables";


export const ContainerLayout = styled.main`
  .layout {
    position: relative;
    height: 100%;
    overflow: hidden;

   
    .layout-wrapper {
      position: relative;
      height: 100%;
      padding: 0;
      margin-left: 5rem;
      @media (max-width: 768px) {
        margin-left: 0;
      }

    }
  }

`
