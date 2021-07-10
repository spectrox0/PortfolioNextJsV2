import styled from 'styled-components'
import {paletteColor} from "../../../styles/variables"
import {Props} from "./index";
import Button, {ButtonProps} from '@material-ui/core/Button';


const {primaryColor} = paletteColor

export const ContainerButton = styled(Button)<Props & ButtonProps>`
  border-radius: 10px !important;
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
  font-size: 1.1em !important;
  transition: all 0.3s linear;
  border: none !important;
  &:hover, &.active {
    color: ${({colorHover}) => colorHover || primaryColor};
    background: rgba(255, 255, 255, 0.05);
  }
  &:after,&:before {
    content: "";
    position: absolute;
    z-index: -1;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    opacity: 0.5;
    border-radius: 10px;
  }
  &:after {
    border-bottom: solid 1px #fff;
    border-right: solid 1px #fff;
  }
  &:before {
    border-top: solid 1px #fff;
    border-left: solid 1px #fff;
    width: calc(100% - .4rem);
    height: calc(100% - .4rem);
  }
  &:hover, &.active{
    &:before, &:after{
      border-color: ${({colorHover}) => colorHover || primaryColor};
    }
  }
  &:active {
    opacity: 0.7;
  }
`
