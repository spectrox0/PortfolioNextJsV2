import styled from "styled-components";
import {motion} from "framer-motion";
import {grayColor, primaryColor} from "../../../helpers/styles";
import {paletteColor} from "../../../styles/variables";


export const ContainerContactTemplate = styled(motion.section)`
  color: #ffffff;
  height: 100%;
  position: absolute;
  top: 50%;
  width: 100%;
  left: 0;
  z-index: 6;
  transform: translate3d(0, -50%, 0);
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
 
  .container {
    overflow-x: hidden;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    position: relative;
    z-index: 10;
    padding: 2rem 1.5rem;

    .grid {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
    }
    .form {
      max-width: 768px;
      transform: translate3d(-100%, 0, 0);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;

      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;

      flex-grow: 1;
      .btn {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
  }
  .data-contact {
    transform: translate3d(100%, 0, 0);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 1rem;
    .direct-contact {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: center;
      span {
        text-transform: lowercase;
        margin: 0.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-bottom: 0.3rem;
        font-size: 1em;
        border-bottom: ${grayColor} 1px solid;
        svg {
          font-size: 1.6em;
          margin-right: 0.5rem;
          color: ${paletteColor.primaryColor};
        }
      }
    }

    .socialNetworks {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      .icon {
        cursor: pointer;
        padding: 0.7rem;
        margin: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 50%;
        border: solid 1px #fff;
        opacity: 0.8;

        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        svg {
          color: #fff;
          font-size: 1.2em;
        }
        &:hover {
          opacity: 1;
          border-color: ${paletteColor.primaryColor};
        }
      }
    }
  }
`
