import styled from "styled-components";
import {paletteColor} from "../../../styles/variables";

export const ContainerToggle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  margin: 0 .3rem;
  padding: 0.5rem 0.3rem;
  height: 3.5rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  width: 3rem;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }

  &:hover {
    div {
      opacity: 0.8;
    }
  }

  div {
    &:nth-child(1) {
      transform-origin: top left;
      width: 90%;
    }

    &:nth-child(2) {
      transform-origin: bottom left;
      width: 100%;
    }

    height: 1px;
    background-color: ${paletteColor.primaryColor};
    width: 100%;
    margin: 0.5rem 0.2rem;
    transition: all 0.3s linear;

  }

  &.open {
    div {
      width: 85%;

      &:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
  }
`
