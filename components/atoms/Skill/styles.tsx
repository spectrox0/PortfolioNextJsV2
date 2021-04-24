import styled from "styled-components";
import {paletteColor} from "@/styles/variables";


export const ContainerSkill = styled.span`
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  border-top: solid 1px ${paletteColor.primaryColor};
  border-left: solid 1px ${paletteColor.primaryColor};
  color: ${paletteColor.primaryColor};
  padding: .5rem 1rem;
  text-transform: capitalize;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`
