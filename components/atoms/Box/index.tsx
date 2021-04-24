import * as React from 'react';
import {ContainerBox} from "./styles";
import {BoxProps} from "@material-ui/core";

interface Props {
    className?:string
}
export const CustomBox: React.FC<Props & BoxProps> = ({children, className, ...rest}) => {
    return (
        <ContainerBox className={className} {...rest}>
            {children}
        </ContainerBox>
    )
}
