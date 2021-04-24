import React from 'react'
import {FormContact as Form} from '@/organism/Form/Contact'
import {Icon} from '@/atoms/Icon'
import {MdMail, MdPhone} from 'react-icons/md'
import PerfectScroll from 'react-perfect-scrollbar'
import {Title} from '@/atoms/Title'
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {ContainerContactTemplate} from "./styles";
import {Grid} from "@material-ui/core";
import {Container} from "../../atoms/Container";
import {CustomBox} from "../../atoms/Box";

const ContactVariant = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
    },

}
const DataContactVariant = {
    initial: {
        opacity: 0,
        x: '100%',
    },
    enter: {
        opacity: 1,
        x: '0',
        transition: {
            duration: 0.5,
            delay: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
}
export const ContactTemplate: React.FC = () => {

    const {locale} = useRouter()
    return (
        <ContainerContactTemplate
            id="contact-me"
            animate="enter"
            initial="initial"
            exit="exit"
            variants={ContactVariant}
        >
            <PerfectScroll>
                <Container maxWidth={'lg'}>
                    <CustomBox my={3} py={3}>
                        <Title variant={'h1'} align={'left'}>
                            {locale === 'es' ? <span className='word2'> Contacto</span> :
                                <>  <span className='word2'> Contact</span> me </>
                            }
                        </Title>

                        <Grid container spacing={3}>

                            <Grid item xs={12} md={6}>
                                <Form/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <motion.div
                                className="data-contact"
                                animate="enter"
                                initial="initial"
                                variants={DataContactVariant}
                            >
                                <div className="direct-contact">
                <span>
                  <MdPhone/> +58 4241309058
                </span>
                                    <span>
                  <MdMail/> alejanvelazco2008@hotmail.com
                </span>
                                </div>
                                <div className="socialNetworks">
                                    <a
                                        className="icon"
                                        href="https://www.linkedin.com/in/alejandro-velazco-rodriguez-849785169/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >

                                        <Icon name={'linkedin'}/>
                                    </a>
                                    <a
                                        className="icon"
                                        href="https://t.me/darkdeveloperx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name={'telegram'}/>
                                    </a>

                                    <a
                                        className="icon"
                                        href="  https://github.com/spectrox0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name={'github'}/>

                                    </a>

                                </div>
                            </motion.div>
                        </Grid>
                        </Grid>
                    </CustomBox>
                </Container>
            </PerfectScroll>
        </ContainerContactTemplate>
    )
}
