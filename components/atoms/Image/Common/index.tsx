import * as React from 'react';
import {ContainerImage} from "./styles";


export interface Props {
    src: string,
    alt?: string,
    width?: string,
    height?: string,
    load?: boolean,
    refImage?: any,
    setLoad?: (value: boolean) => void
}

export const Image: React.FC<Props> = ({alt = "", setLoad, refImage, ...rest}) => {
    return (
        <ContainerImage
            alt={alt}
            onLoad={() => setLoad && setLoad(true)}
            ref={refImage}
            {...rest}
        />
    )
}