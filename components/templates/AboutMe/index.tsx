import React from 'react'
import {AiOutlineClockCircle, AiOutlineDesktop, AiOutlineMobile,} from 'react-icons/ai'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useIntl} from "react-intl";
import {useRouter} from "next/router";
import {ContainerTemplateAboutMe} from "./styles";
import {AboutMeVariant} from "../../../utils/animations/transitionPage";
import {Title} from "@/atoms/Title";
import {Btn} from '@/atoms/Button'
import {Box, Grid, Typography} from "@material-ui/core";
import {CustomBox} from "../../atoms/Box";
import {Container} from "../../atoms/Container";
import Skills from "@/organism/Skills";
import VisibilitySensor from "react-visibility-sensor";
import {AnimatePresence} from "framer-motion";

export const AboutMe: React.FC = () => {
    const {formatMessage: t} = useIntl()
    const {locale} = useRouter()
    const [imageLoad, setImage] = React.useState<boolean>(false)
    const imgRef = React.useRef<HTMLImageElement>(null)
    // @ts-ignore
    const getAge = (birthDate:string) => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

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
            <PerfectScrollbar className={'scrollbar-contain'}>
                <div className={'inner-view'}>
                    <Container>
                        <CustomBox my={3}>
                            <Grid container>
                                <Grid md={5} xs={12}>
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
                                </Grid>
                                <Grid xs={12} md={7}>
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
                                                <span> {getAge("1996-03-12")} </span>
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
                                            <a href={"/pdf/Alejandro's Resume (3).pdf"} download>
                                                <Btn size={'large'}>
                                                    {t({id: 'download my cv'})}
                                                </Btn>
                                            </a>
                                        </Box>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} className='services-container'>
                                <Title align={'center'} variant={'h2'}>
                                    {t({id: 'my'})} <span className="word2">{t({id: 'services'})}</span>
                                </Title>
                                <div className="services">
                                    <div className="item">
                                        <AiOutlineDesktop/>
                                        <Typography align={'center'}
                                                    variant={'subtitle1'}>{t({id: 'web development'})} </Typography>
                                        <Typography
                                            variant={'body2'}> {t({id: 'web development.description'})}</Typography>
                                    </div>

                                    <div className="item">
                                        <AiOutlineClockCircle/>
                                        <Typography align={'center'}
                                                    variant={'subtitle1'}>{t({id: 'fast delivery'})} </Typography>
                                        <Typography
                                            variant={'body2'}>{t({id: 'fast delivery.description'})} </Typography>
                                    </div>
                                    <div className="item">
                                        <AiOutlineMobile/>
                                        <Typography align={'center'}
                                                    variant={'subtitle1'}> {t({id: 'app development'})} </Typography>
                                        <Typography
                                            variant={'body2'}> {t({id: 'app development.description'})} </Typography>
                                    </div>
                                </div>
                            </Grid>
                            </Grid>
                        </CustomBox>
                    </Container>
                </div>
                <VisibilitySensor partialVisibility offset={{bottom: 200}}>
                    {({isVisible}) =>
                        <div className={'inner-view'}>
                            <AnimatePresence> {isVisible ?
                                <Skills/> : null}     </AnimatePresence></div>
                    }
                </VisibilitySensor>
            </PerfectScrollbar>
        </ContainerTemplateAboutMe>
    )
}
