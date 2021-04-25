import styled from "styled-components";
import {Box} from '@material-ui/core'
import {paletteColor} from "../../../styles/variables";

export const ContainerBox = styled(Box)`
  transform: translate3d(0, 0, 0);
  background-color: ${paletteColor.backgroundColorOpacity(0.6)};
  border-radius: 10px;
  overflow: hidden;
  width: 100% ;
  position: relative;

`
