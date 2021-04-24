import * as React from 'react';
import {ContainerTitle} from "./styles";
import {TypographyProps} from "@material-ui/core";
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';


export interface Props {
    className?: string,
    fontWeight?: string | number
}


export const Title: React.FC<Props & TypographyProps> = ({
                                                             children,
                                                             ...rest
                                                         }) => {
    return (
        <ContainerTitle  {...rest}>
            {children}
        </ContainerTitle>)
}
