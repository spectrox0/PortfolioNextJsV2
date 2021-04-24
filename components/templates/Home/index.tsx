import React, {useState} from 'react'
import {ContainerTemplateHome} from "./styles";
import {HomeVariant} from "../../../utils/animations/transitionPage";
import {useRouter} from "next/router";
import {useIntl} from "react-intl";
import {Title} from "@/atoms/Title";
import {SlideText} from "@/molecules/SlideText";
import Link from "next/link";
import {Btn} from "@/atoms/Button";
import {Box} from "@material-ui/core";

export const HomeTemplate: React.FC = () => {
    const {locale} = useRouter();
    const [current, setCurrent] = useState<number>(0)
    const goRight = (): void => {
        setCurrent(current == elements.length - 1 ? 0 : current + 1)
    }
    const {formatMessage: t} = useIntl()
    const elements: string[] = [
        t({id: 'engineer system'}),
        t({id: 'fullstack developer'}),
    ]

    return (
        <ContainerTemplateHome
            id="home"
            animate="enter"
            initial="initial"
            exit="exit"
            variants={HomeVariant}
        >
            <div className="container">
                <div className={'slide-content'}>
                    <div className="text">
                        <Title variant={'h1'} align={'left'}>
                            {t({id: "hi i'm"})} Alejandro <span className="word2"> Velazco</span>{' '}
                        </Title>
                        {elements.map((element, index) =>
                            current == index &&
                            <SlideText
                                text={element}
                                key={element}
                                startCarousel={goRight}
                            />
                        )}
                    </div>
                    <div className="options">
                        <Box mx={1} my={1}>
                            <Link href="/works" locale={locale}>
                                <Btn size={'large'} color={"primary"}>   {t({id: "my works"})} </Btn>
                            </Link>
                        </Box>
                        <Box mx={1} my={1}>
                            <Link href="/contact" locale={locale}>
                                <Btn size={'large'}>  {t({id: "contact me"})}</Btn>
                            </Link>
                        </Box>
                    </div>
                </div>
            </div>
        </ContainerTemplateHome>
    )
}
