import styled from "styled-components";
import {motion} from "framer-motion";

export const ContainerTemplateHome = styled(motion.section)`
  transform: translate3d(0, 0, 0);
  z-index: 5;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  padding: 1rem;
  overflow: hidden;

  .container {
    flex: 1;
    z-index: 5;
  }

  .slide-content {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 2;
    justify-content: center;

    .text {
      position: relative;
      flex-direction: column;
      padding: 0.5rem;
    }

    .options {
      margin-top: 5rem;
      display: flex;
      flex-wrap: wrap;
      position: relative;

    }
  }
`
