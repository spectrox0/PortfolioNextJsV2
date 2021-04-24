import styled from "styled-components";
import {Props} from './'

export const ContainerImage = styled.img<Props>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  object-fit: cover;
  object-position: center center;
  
`