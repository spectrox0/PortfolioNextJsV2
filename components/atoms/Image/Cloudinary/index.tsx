import * as React from 'react';
import {Image, Placeholder, Transformation} from 'cloudinary-react'

interface Props {
    image?: string,
    alt: string,
    className?: string
}

export const CloudinaryImage: React.FC<Props> = ({image, alt, className = ""}) => {

    return image ? (
        <Image
            alt={alt}
            publicId={`${image}.webp`}
            className={className}
        >
            <Placeholder type="pixelate"/>
            <Transformation quality="auto"/>
        </Image>
    ) : null

}
