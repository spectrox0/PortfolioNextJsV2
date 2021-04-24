import React from 'react'
import {ContainerToggle} from "./styles";

interface Props {
    callback?(): void;

    isOpen: boolean
}

export const Toggle: React.FC<Props> = ({callback, isOpen}) => {
    return (
        <ContainerToggle className={`${isOpen ? 'open' : ''}`} onClick={callback}>
            <div/>
            <div/>
        </ContainerToggle>)
}


