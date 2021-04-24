import * as React from 'react'
import Work from "../../../../models/Work";
import {ContainerGridWorks} from "./styles";
import {XBlock, XMasonry} from "react-xmasonry";
import {Work as CardWork} from '@/molecules/Card/Work'

interface Props {
    works: Work[],
    className?: string
    openModal: (work: Work) => void
}

export const GridWorks: React.FC<Props> = ({works, openModal}) => {
    return (
        <ContainerGridWorks>
            <XMasonry>
                {
                    works.map(work => (
                        <XBlock key={work.id} width={2}>
                            <CardWork
                                title={work.name}
                                height={work.height}
                                date={work.createdAt.seconds * 1000}
                                img={work.images[0]}
                                images={work.images}
                                categories={work.categories}
                                link={work.link}
                                openModal={openModal}
                                content={work.description}
                            />
                        </XBlock>
                    ))}


            </XMasonry>
        </ContainerGridWorks>
    )
}
