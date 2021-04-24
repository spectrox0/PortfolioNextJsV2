import * as React from 'react';
import {ContainerStyled} from "./styles";
import {ContainerProps} from "@material-ui/core";


export const Container: React.FC<ContainerProps> = ({children, ...rest}) => {
    return (
        <ContainerStyled {...rest} >
            {children}
        </ContainerStyled>
    )
}
