import styled from 'styled-components'
import {paletteColor} from "../../../styles/variables"
import {Props} from "./index";
import Button, {ButtonProps} from '@material-ui/core/Button';


const {primaryColor} = paletteColor

export const ContainerButton = styled(Button)<Props & ButtonProps>`
  border-radius: 0 !important;
  text-transform: uppercase;
  color: ${({color}) => color || paletteColor.textColor};
  outline: none;
  white-space: nowrap;
  text-align: center;
  background: rgba(27, 28, 36, .3);
  justify-content: center;
  padding: 0.7rem;
  cursor: pointer;
  font-weight: 300;
  letter-spacing: 0.1em;
  font-size: 1.1em;
  border: solid 1px rgba(255, 255, 255, 0.3);
  transition: all 0.3s linear;

  &:hover, &.active {
    color: ${({colorHover}) => colorHover || primaryColor};
    border-color: ${({colorHover}) => colorHover || primaryColor};
    background: rgba(255, 255, 255, 0.05);
  }

  &:active {
    opacity: 0.7;
  }
`
