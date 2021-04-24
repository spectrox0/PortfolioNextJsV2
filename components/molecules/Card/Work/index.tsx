import React from 'react'

import {ContainerCardWork} from './styles'
import {CloudinaryImage} from "@/atoms/Image/Cloudinary";
import {Title} from '@/atoms/Title'

interface Props {
    title: string
    img: string
    images: string[]
    categories: string[]
    content: string
    category?: string
    height: number
    openModal: (work) => void
    link: string | undefined
    date: number
}


export const Work: React.FC<Props> = ({
                                   title,
                                   img,
                                   images,
                                   categories,
                                   content,
                                   date,
                                   openModal,
                                   link,
                               }) => {

    return (
        <ContainerCardWork
            initial="initial"
            animate="enter"
            variants={WorkVariant}
            onClick={() =>
                openModal({title, img, images, content, categories, date, link})
            }
        >
            <figure className="img-work">
                <div className='img'>
                    <CloudinaryImage
                        image={img}
                        alt={''}
                    />
                </div>
                <div className="title">
                    <Title variant={'h3'}>{title}</Title>
                </div>
            </figure>
        </ContainerCardWork>
    );
}
const WorkVariant = {
        initial: {
            opacity: 0,
            originX: 0.5,
            originY: 0.5,
            scale: 0.6

    },
    enter: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.2,
            duration: 0.4,
            ease: 'easeInOut',
        },
    },
    }
