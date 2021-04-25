import styled from "styled-components";
import {paletteColor} from "../../../styles/variables";


export const ContainerNavbar = styled.div`
  nav {
    padding: 0;
    width: 5rem;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: ${paletteColor.backgroundColorOpacity(0.5)};
    color: #fff;
    transition: transform 0.4s linear;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 1px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255,255,255, .7), rgba(0, 0, 0, 0));
    }

    .navbar-inner {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;

      .bottom-menu {
        margin-bottom: 1rem;
      }

      .item-flag {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .flag {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: solid 1px ${paletteColor.primaryColor};
        margin: .5rem 0;
        cursor: pointer;
        transition: all .4s ease-in-out;

        &:active {
          opacity: 0.4;
        }

        &:not(.active) {
          border-color: rgba(255, 255, 255, 1);;
          opacity: 0.7;
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
          filter: grayscale(100%);
        }

        padding: 0;

        path {
          height: 100%;
          width: 100%;
          margin: 0;
          object-fit: cover;
        }
      }

      .social-networks {
        display: flex;
        flex-direction: column;

        .icon {
          padding: .6rem;
          width: 100%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          margin: 1rem 0;
          cursor: pointer;
          position: relative;
          font-size: 1.2em;

          &:after {
            content: "";
            position: absolute;
            top: 0;
            z-index: -1;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: center center;
            border: solid 1px rgba(255,255,255, 0.5);
            transform: rotate(45deg);
            opacity: 0;
            transition: all .3s ease-in-out;
          }

          &:hover::after {
            opacity: 1;
          }
        }
      }
    }

    ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      padding: 0.3em 0;
      margin: 0;
      width: 100%;

      li {
        flex-basis: 10%;
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        cursor: pointer;
        text-transform: uppercase;
        height: 100%;

        .item {
          width: 100%;
          height: auto;
          color: rgb(231, 231, 231);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          flex-direction: column;
          padding: calc(.3em + 22%) 1em;
          font-size: 1em;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          font-weight: 300;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          outline: 0;
          position: relative;
          transition: all ease-out 0.3s;

          &:active {
            opacity: 0.7;
          }

          .container-name {
            position: absolute;
            transition: width .4s ease-in-out;
            bottom: 0;
            left: 0;
            width: 0;
            height: 100%;
            overflow: hidden;
          }

          span {
            font-size: 0.65em;
            bottom: 0;
            left: 0;
            font-weight: 300;
            width: 5rem;
            position: absolute;
            opacity: 0.8;
            color: #fff;
            text-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin: 0;
            padding: 0.3rem 0.5rem;

            &:after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              height: 1px;
              width: 100%;
              background: linear-gradient(to right, #fff, rgba(255,255,255, 0));
            }
          }

          svg {
            transition: all ease-out, 0.5s;
            min-height: 1rem;
            min-width: 1rem;
            max-height: 10vh;
            max-width: 10vh;
          }

          &.active {
            svg {
              opacity: 1;
              -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
              -webkit-transform-origin: center;
              -ms-transform-origin: center;
              transform-origin: center;
            }
          }

          &:hover,
          &.active {
            color: ${paletteColor.primaryColor};

            .container-name {
              width: 100%;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      transform: translateX(-100%);
      background-color: rgba(27, 28, 36, .3);
      &.open {
        transform: translateX(0);
      }
    }
  }
`
