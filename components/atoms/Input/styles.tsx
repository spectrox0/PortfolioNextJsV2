import styled from "styled-components";
import {paletteColor} from "../../../styles/variables";

interface Props {
    textarea?: boolean
}

export const ContainerInput = styled.div<Props>`
  position: relative;
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  

  textarea,
  input {
    font-family: "Montserrat", sans-serif;
    z-index: 2;
    height: 100%;
    width: 100%;
    color: #fff;
   
    font-size: 1.2em;
    font-weight: 300;
    border: none;

    &:not(:placeholder-shown) + .input, &:focus + .input {
      opacity: 1;
      border-color: ${paletteColor.primaryColor};

      .label-name {
        transform: scale(1.05) translate(-2.2rem, -2.2rem);
      }
    }

    background: none;
    outline: 0;
  }


  }


  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      transition: all 5000s ease-in-out 0s;
      transition-property: background-color, color !important;
    }
  }


`
