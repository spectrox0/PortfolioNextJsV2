import styled, {keyframes} from "styled-components";
import {motion} from "framer-motion";
import {paletteColor} from "../../../styles/variables";

const InputAnimationImg = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(225deg) scale(0)
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(225deg) scale(1.05)
  }
`
export const ContainerTemplateAboutMe = styled(motion.section)`
  color: #fff;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  height: 100%;
  transform: translate3d(0, 0, 0);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  p { 
    padding: .5rem 0;
    margin: 0 auto;
    font-style: italic;
    line-height: 1.5em;
    font-size: 1.2em;
    max-width: 992px;
  }

  .options {
    padding: 0.5rem;

    span {
      padding: 0.3rem 0.5rem;
      border-bottom: solid #fff 1px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      font-weight: 300;

      &:hover {
        opacity: 0.8;
      }

      &.active {
        color: ${paletteColor.primaryColor};
        border-color: ${paletteColor.primaryColor};
      }
    }
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex: 1;
      margin: .5rem;
      background-color: rgba(27, 28, 36, .1);
      border: solid 1px rgba(255, 255, 255, 0.5);
      flex-direction: column;
      align-items: center;
      padding: 1.2em 0.8em;

      svg {
        font-size: 3em;
        color: ${paletteColor.primaryColor};
      }

      span {
        text-transform: capitalize;
        text-align: center;
        font-size: 1.5em;
        font-weight: 600;
      }

      p {
        text-align: center;
        margin: 0;
        padding: 1rem 0;
        font-size: 0.9em;
      }
    }
  }


  svg {
    margin: 0.3em;
    font-size: 2em;
    color: ${paletteColor.primaryColor};
  }

  .title {
    text-align: left;
    font-weight: 400;
    font-size: 1.5em;
    color: #fff;
    text-transform: capitalize;
  }
  
}

.list-data {
  max-width: 992px;
  margin: 0 auto;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      min-width: 45%;

      margin: 1rem 2%;
      list-style: none;
      padding: 0.5em;
      display: flex;
      flex-wrap: wrap;
      position: relative;

      &:after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
        opacity: .3;
      }

      &:before {
        position: absolute;
        content: '';
        bottom: -10%;
        left: 0;
        width: 90%;
        height: 1px;
        background-color: #fff;
        opacity: .3;
      }

      span {
        text-transform: capitalize;
        &:first-child {
          font-weight: 600;
          margin-right: 1rem;
        }
      }
    }
  }
}

.container {
  padding: 2rem 1.5rem;

  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
  
  transform: translate3d(0, 0, 0);


  &.active {
    .img-lazy {
      &:after {
        animation: ${InputAnimationImg} 0.8s ease-in-out 0.3s forwards;
      }
    }

    img {
      opacity: 1;
    }

  }
}

.img-lazy {
  width: 100%;
  position: relative;

  &:after {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 0;
    opacity: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    transform: translate3d(0, 0, 0) rotate(225deg) scale(0);
    border-left-color: ${paletteColor.primaryColor};
    border-right-color: ${paletteColor.primaryColor};
  }

  &:before {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 0;
    opacity: .5;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    transform: translate3d(0, 0, 0) scale(1.02);
    border-top-color: #fff;
    border-bottom-color: #fff;
  }

}

img {
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 50%;

  &.img-real {
    position: absolute;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


  }
}

.biography {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
  height: auto;
  min-width: 20rem;
  padding: 1rem;

}
`
