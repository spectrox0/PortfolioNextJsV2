import React from 'react'
import {FaLink} from 'react-icons/fa'
import {TiArrowBackOutline} from 'react-icons/ti'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from "next/router";
import {Backdrop, ContainerModal} from "./styles";
import {Carousel} from "../../../molecules/Carousel";

const options = {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

export const Modal: React.FC = () => {
    const {isOpen, work: currentWork} = useSelector(state => ({
        ...state,
    }))
    const dispatch = useDispatch()
    const {locale} = useRouter()
    const [currentImage, setCurrentImage] = React.useState(0)
    React.useEffect(() => {
        setCurrentImage(0)
        return () => setCurrentImage(0)
    }, [currentWork])
    return (
        <>
            <Backdrop
                active={isOpen}
                onClick={() => dispatch({type: 'CLOSE_WORK'})}
            />
            <ContainerModal active={isOpen}>
                <div className="modal-footer">
                    {currentWork && currentWork.link && (
                        <a
                            className="link"
                            href={currentWork.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLink/>
                        </a>
                    )}
                    <div
                        className="link"
                        onClick={() => dispatch({type: 'CLOSE_WORK'})}
                    >
                        <TiArrowBackOutline/>
                    </div>
                </div>
                <div className="modal-wrapper">
                    <div className="images">


                        {currentWork && (
                            <Carousel images={currentWork.images}/>

                        )}
                    </div>
                    <div className="modal-content" id="modal-content">
                        <h4> {currentWork && currentWork.title} </h4>
                        <span className="date">
              {' '}
                            {currentWork &&
                            new Date(currentWork.date).toLocaleString(
                                `${locale}-VE`,
                                options
                            )}{' '}
            </span>
                        <div className="description">
                            {currentWork && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: currentWork.content,
                                    }}
                                />
                            )}
                        </div>
                        <div className="tags">
                            {currentWork &&
                            currentWork.categories.map(item => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </ContainerModal>
        </>
    )
}
