import styled from "styled-components";
import {paletteColor, fontFamily} from "../../../styles/variables";

interface Props {
    fontSize?: string,
    color?: string,
    fontWeight?: string | number
    alignText?: string
}

export const ContainerText = styled.p<Props>`
  margin: 0;
  padding: 0;
  color: ${({color}) => color || paletteColor.textColor};
  font-family: ${fontFamily};
  letter-spacing: 0.11em;
  line-height: 1.3em;
  font-weight: ${({fontWeight}) => fontWeight || 300};;
  font-size: ${({fontSize}) => fontSize || "1.1em"};;
  text-align: ${({alignText}) => alignText || 'left'};
`