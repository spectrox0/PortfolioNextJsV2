import { motion } from "framer-motion";
import styled from "styled-components";
import { paletteColor } from "../../../styles/variables";

export const ContainerLoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${paletteColor.backgroundColorOpacity(0.8)};
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
