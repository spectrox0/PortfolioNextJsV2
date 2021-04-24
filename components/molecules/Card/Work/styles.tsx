import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerCardWork = styled(motion.span)`
  z-index: 2;
  color: #ffffff;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transform: translate3d(0px, 0px, 0px);
  overflow: hidden;
  transform-origin: center center !important;
  opacity: 1;
  position: relative;
  .img-work {
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    .img {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      transform: translate3d(0, 0, 0);
      transition: all linear 0.3s;
      position: relative;
      z-index: 2;
      img {
        width: 100%;
        object-fit: cover;
        object-position: center center;
        min-height: 100% !important;
      }
      &.active {
        .blur-image {
          display: none;
        }
      }
    }

   
  }

  .title {
    padding: 1rem 0.2rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    opacity: 0;
    z-index: 4;
    height: 100%;
    width: 100%;
    transition: all ease-in-out 0.3s;
    background-color: rgba(0, 0, 0, 0.2);
    border: solid 1px rgba(255, 255, 255, 0.3);

    h3 {
      display: flex;
      font-weight: 400;
      letter-spacing: .12em;
      font-size: 1.3em;
      position: relative;
      text-transform: uppercase;
      padding: 1.5rem 1rem;
      margin: 0;
      max-width: 70%;
      text-align: center;
      align-items: center;
      flex-direction: column;
      border: solid 1px rgba(255, 255, 255, 0.3);
    }
  }

  &:hover {
    .img {
      transform: scale3d(1.15, 1.15, 1);
      opacity: 0.3;
    }

    h3 {
    }

    .title {
      opacity: 1;
    }
  }
`
