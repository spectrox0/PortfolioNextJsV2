import styled from "styled-components";
import {Box} from '@material-ui/core'

export const ContainerBox = styled(Box)`
  transform: translate3d(0, 0, 0);
  padding: calc(2% + .2rem);

  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  position: relative;

`
