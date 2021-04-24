import styled from "styled-components";
import {fontBold, fontFamily, paletteColor} from "../../../styles/variables";
import {Typography, TypographyProps} from "@material-ui/core";

interface Props {
    color?: string,
    fontWeight?: string | number
}

export const ContainerTitle = styled(Typography)<Props & TypographyProps>`
  position: relative;
  flex: 1;
  width: 100%;
  text-transform: uppercase;
  color: ${({color}) => color || paletteColor.textColor};
  font-family: ${fontFamily};
  letter-spacing: 0.13em;
  display: inline-block;
  line-height: 1.3em;
  font-weight: ${({fontWeight}) => fontWeight || fontBold} !important;
  margin: 0;
  padding: 0;

  .word2 {
    display: inline-block;
    font-weight: 700 !important;
    color: ${paletteColor.primaryColor} !important;
  }

  .shadow {
    color: #fff;
    z-index: -1;
    position: absolute;
    font-size: 1.7em;
    width: 100%;
    opacity: 0.2;
    left: 50%;
    top: 50%;
    display: flex;
    align-items: center;
    transform: translate(-50%, -50%);

    &:after,
    &:before {
      content: '';
      width: 50%;
      height: 1px;
      background: white;
    }
  }
}


b, strong {
  font-weight: 600 !important;
}

&.underline {
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: calc(100% - 30px);
    background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.1));
  }
}
`
