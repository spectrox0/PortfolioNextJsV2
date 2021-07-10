import * as React from 'react';
import {ContainerBox} from "./styles";
import {BoxProps} from "@material-ui/core";

interface Props {
    className?:string
}
export const CustomBox: React.FC<Props & BoxProps> = ({children, px = 4, py = 4, className, ...rest}) => {
    return (
        <ContainerBox className={className} px={px} py={py} {...rest}>
            {children}
        </ContainerBox>
    )
}
