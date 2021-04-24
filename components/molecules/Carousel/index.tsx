import * as React from 'react'
import {ContainerCarousel} from "./styles";
import {AwesomeSliderProps} from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/custom-animations/fall-animation.css"
import {CloudinaryImage} from "../../atoms/Image/Cloudinary";




interface Props {
    images: string[]
}

export const Carousel: React.FC<Props & AwesomeSliderProps> = ({images, ...rest}) => {
    return (
        <ContainerCarousel animation="fallAnimation"  {...rest} infinite={images.length > 1} bullets={false}>
            {images.map((item, i) =>
                <div key={i} className={'item-carousel'}>
                <CloudinaryImage alt={""} image={item} />
            </div>)}
        </ContainerCarousel>
    )
}
