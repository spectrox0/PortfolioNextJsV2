import * as React from 'react';
import {ContainerBackground} from "./styles";

export type Props = {
    className?: string,
    url: string,
    zIndex?: number,
    position?: string,
    colorBackdrop?: string,
    opacityBackdrop?: number,
    fixed?: boolean,
}

export const Background: React.FC<Props> = ({
                                         fixed = false,
                                         url,
                                         zIndex = -9999,
                                         className = '',
                                         position = 'center',
                                         colorBackdrop ,
                                         opacityBackdrop ,
                                     }) => {
    return (
        <ContainerBackground className={className}
                             fixed={fixed}
                             colorBackdrop={colorBackdrop}
                             opacityBackdrop={opacityBackdrop}
                             position={position}
                             zIndex={zIndex}
                             url={url}/>

    )
}
