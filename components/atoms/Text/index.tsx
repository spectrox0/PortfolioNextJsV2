import * as React from 'react';
import {ContainerText} from "./styles";

interface Props {
    className?: string
    fontSize?: string,
    color?: string,
    fontWeight?: string | number
    alignText?: string
}

export const Text: React.FC<Props> = ({className = '', children, ...rest}) => {
    return (
        <ContainerText className={className} {...rest}>
            {children}
        </ContainerText>
    )
}