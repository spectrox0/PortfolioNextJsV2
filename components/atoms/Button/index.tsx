import * as React from 'react'
import {ContainerButton} from "./styles";
import {ButtonProps} from "@material-ui/core/Button";

export interface Props {
    className?: string
    colorHover?: string
}


export const Btn: React.FC<Props & ButtonProps> = ({
                                                       children
                                                       , ...rest
                                                   }) => {
    return (
        <ContainerButton {...rest} variant="outlined" disableElevation>{children}</ContainerButton>)
}
