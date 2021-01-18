import styled from 'styled-components'
import {primaryColor} from "../helpers/styles";
import * as React from "react";

interface PropsBtn {
    color?: string,
    colorHover?: string,
    flexGrow?: number,
    flexShrink?: number,
    flexBasis?: string | number,
    margin?: string | number,
}

export const Btn = styled.button<PropsBtn & React.HtmlHTMLAttributes<HTMLButtonElement> & React.HTMLProps<HTMLButtonElement>>`
  text-transform: uppercase;
  color: ${({color}) => color};
  outline: none;
  white-space: nowrap;
  margin: ${({margin}) => margin };
  text-align: center;
  background: rgba(27, 28, 36, .3);
  justify-content: center;
  padding: 0.7rem;
  cursor: pointer;
  font-weight: 300;
  letter-spacing: 0.1em;
  flex-grow: ${({flexGrow}) => flexGrow};
  flex-shrink: ${({flexShrink}) => flexShrink};
  flex-basis: ${({flexBasis}) => flexBasis};
  font-size: 1.1em;
  border: solid 1px rgba(255, 255, 255, 0.3);
  transition: all 0.3s linear;

  &:hover, &.active {
    color: ${({colorHover}) => colorHover};
    border-color: ${({colorHover}) => colorHover};
    background: rgba(255, 255, 255, 0.05);
  }

  &:active {
    opacity: 0.7;
  }
`
Btn.defaultProps = {
    color: '#fff',
    colorHover: primaryColor,
    flexGrow: 0,
    flexShrink:1,
    flexBasis: '0%',
    margin: '0.5rem'
}
