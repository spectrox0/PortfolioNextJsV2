import styled from "styled-components";

interface PropsStyled {
    fontSize?: string
}
export const ContainerSlideText = styled.p<PropsStyled>`
  transform: translate3d(0px, 0px, 0px);
  display: flex;
  position: absolute;
  display: -webkit-box;
  letter-spacing: 0.15em;
  font-weight: 300;
  font-size: ${({fontSize})=> fontSize};
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
`
