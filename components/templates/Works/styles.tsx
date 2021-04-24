import styled from "styled-components";
import {motion} from "framer-motion";

interface PropsStyled {
    isOpen: boolean
}

export const ContainerWorkTemplate = styled(motion.section) <PropsStyled>`
  color: #fff;
  height: 100%;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  transform: translate3d(0, 0, 0);
  padding: 0;
  z-index: 7;

  .xmasonry .xblock {
    transition: left .3s ease, top .3s ease;
    padding: .1rem;
    display: flex;
  }

  .grid {
    width: 100%;
  }

  .grid:after {
    content: '';
    display: block;
    clear: both;
  }

  /* ---- grid-item ---- */

  .grid-item {
    float: left;
    width: 33%;
    @media screen and (max-width: 992px) {
      width: 50%
    }
    @media screen and (max-width: 600px) {
      width: 100%
    }
  }

  .container {
    flex: 1;
    width: 100%;
    max-width: none;
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
    transition: 0.3s ease-in-out transform;
    transform-origin: center center;
    transform: ${props => (props.isOpen ? 'scale(.8)' : 'scale(1)')};
  }

  .switch {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    flex-shrink: 1;
    flex-wrap: wrap;
    position: relative;

  }

  .row-button {
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;
    align-items: center;
  }

`
