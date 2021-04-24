import styled from "styled-components";
import {motion} from "framer-motion";
import {primaryColor} from "../../../helpers/styles";
import {paletteColor} from "../../../styles/variables";

export const ContainerSkill = styled(motion.div)`
  padding: 1em;
  position: relative;
  opacity: 0;

  .label {
    font-weight: 300;
    display: flex;
    color: white;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    font-size: 1em;
    text-transform: uppercase;
    margin-bottom: 0.3rem;

    .icon {
      opacity: 0.5;
      z-index: 0;
      font-size: 4em;
      padding-right: 0.2em;
      position: absolute;
      color: ${paletteColor.primaryColor};
      top: -1rem;
      left: 90%;
      transform: translate3d(-90%, 0, 0);
    }

    .progress {
      font-size: 1.1em;
      position: relative;
      z-index: 1;
      font-weight: 500;
      opacity: .8;
    }

    .name {
      flex: 1;
      letter-spacing: 0.1em;
      font-weight: 500;
      font-size: 1.2em;
      opacity: .8;
      transform-origin: left bottom;
    }
  }

  .line {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 0.15em;
    background: rgba(255, 255, 255, 0.5);

    .line-progress {
      transform: translate3d(0, 0, 0);
      background: #fff;
      height: 0.15em;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: .9em;
        border-radius: 50%;
        width: .9em;
        transform: translate3d(50%, -50%, 0);
        background: #fff;
        right: 0;
        top: 50%;
      }
    }
  }
`
