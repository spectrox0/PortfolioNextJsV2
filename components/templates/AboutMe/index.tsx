import React from 'react'
import {AiOutlineClockCircle, AiOutlineDesktop, AiOutlineMobile,} from 'react-icons/ai'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useIntl} from "react-intl";
import {useRouter} from "next/router";
import {ContainerTemplateAboutMe} from "./styles";
import {AboutMeVariant} from "../../../utils/animations/transitionPage";
import {Title} from "@/atoms/Title";
import {Btn} from '@/atoms/Button'
import {Box, Typography} from "@material-ui/core";

export const AboutMe: React.FC = () => {
    const {formatMessage: t} = useIntl()
    const {locale} = useRouter()
    const [imageLoad, setImage] = React.useState<boolean>(false)
    const imgRef = React.useRef<HTMLImageElement>(null)

    React.useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setImage(true)
        }
    }, [])
    return (
        <ContainerTemplateAboutMe
            id="about-me"
            animate="enter"
            initial="initial"
            exit="exit"
            variants={AboutMeVariant}
        >
            <PerfectScrollbar>
                <div className="container container-about">
                    <div className="row">

                        <>
                            <div className={`img ${imageLoad ? 'active' : ''}`}>
                                <div className='img-lazy'>
                                    <img
                                        alt="me"
                                        src={require('images/me.jpg?lqip')}
                                    />
                                </div>
                                <img
                                    className={'img-real'}
                                    alt="alejandro velazco"
                                    ref={imgRef}
                                    src={require('images/me.jpg?webp')}
                                    onLoad={() => setImage(true)}
                                />
                            </div>

                            <div className="biography">
                                <Title variant={'h1'} align={'center'}>
                                    {locale == 'es' ?
                                        <span className="word2">Acerca de mi </span>
                                        : <>   <span className="word2">About </span> me </>
                                    }
                                </Title>
                                <Typography variant={'body1'}>{t({id: 'description about me'})}</Typography>

                                <div className='list-data'>
                                    <ul>
                                        <li>
                                            <span>{t({id: 'age'})}:</span>
                                            <span> 23 </span>
                                        </li>
                                        <li>
                                            <span>{t({id: 'residence'})}:</span>
                                            <span> Caracas, Venezuela </span>
                                        </li>
                                        <li>
                                            <span>Degree:</span>
                                            <span> Bachelor	 </span>
                                        </li>
                                        <li>
                                            <span> Freelance: </span>
                                            <span> {t({id: 'available'})} </span>
                                        </li>
                                        <li>
                                            <span> Mail: </span>
                                            <span>  alejanvelazco2008@hotmail.com </span>
                                        </li>
                                    </ul>
                                    <Box px={3} py={1} flexGrow={1}>
                                        <a href={"/pdf/Alejandro's Resume (2).pdf"} download>
                                            <Btn size={'large'}>
                                                {t({id: 'download my cv'})}
                                            </Btn>
                                        </a>
                                    </Box>
                                </div>
                            </div>
                        </>
                    </div>
                    <div className='services-container'>
                        <Title align={'center'} variant={'h2'}>
                            {t({id: 'my'})} <span className="word2">{t({id: 'services'})}</span>
                        </Title>
                        <div className="services">
                            <div className="item">
                                <AiOutlineDesktop/>
                                <Typography variant={'subtitle1'}>{t({id: 'web development'})} </Typography>
                                <Typography variant={'body2'}> {t({id: 'web development.description'})}</Typography>
                            </div>

                            <div className="item">
                                <AiOutlineClockCircle/>
                                <Typography variant={'subtitle1'}>{t({id: 'fast delivery'})} </Typography>
                                <Typography variant={'body2'}>{t({id: 'fast delivery.description'})} </Typography>
                            </div>
                            <div className="item">
                                <AiOutlineMobile/>
                                <Typography variant={'subtitle1'}> {t({id: 'app development'})} </Typography>
                                <Typography variant={'body2'}> {t({id: 'app development.description'})} </Typography>
                            </div>
                        </div>
                    </div>
                </div>

            </PerfectScrollbar>
        </ContainerTemplateAboutMe>
    )
}
