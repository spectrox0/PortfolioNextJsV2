import * as React from 'react';
import {paramsTsParticles} from "../../../utils/particles/default";
import {ContainerParticles} from "./styles";

export const CustomParticles: React.FC = () => {
    return (
        <ContainerParticles params={paramsTsParticles}/>
    )
}