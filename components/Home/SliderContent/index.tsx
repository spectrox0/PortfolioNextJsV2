import React, {FC, useState} from 'react'
import Slide from './SlideText'
import styled from 'styled-components'
import {primaryColor} from '../../../helpers/styles'
import {Title} from '../../../styles/titles'
import {Btn} from '../../../styles/buttons'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useIntl} from "react-intl";

const SliderContent: FC = () => {
    const {locale} = useRouter();
    const [current, setCurrent] = useState<number>(0)
    const goRight = (): void => {
        setCurrent(current == elements.length - 1 ? 0 : current + 1)
    }
    const {formatMessage : t} = useIntl()
    const elements: string[] = [
        t({id:'engineer system'}),
        t({id:'fullstack developer'}),
    ]
    return (
        <StyleContent>
            <div className="text">
                <Title margin="0 0 1rem 0">
                    {t({id:"hi i'm"})} Alejandro <span className="word2"> Velazco</span>{' '}
                </Title>
                {elements.map((element, index) =>
                    current == index &&
                    <Slide
                        text={element}
                        key={element}
                        startCarousel={goRight}
                    />
                )}
            </div>
            <div className="options">
                <Link href="/works" locale={locale}>
                    <Btn color={primaryColor}>   {t({id:"my works"})} </Btn>
                </Link>
                <Link href="/contact" locale={locale}>
                    <Btn>  {t({id:"contact me"})}</Btn>
                </Link>
            </div>
        </StyleContent>
    )
}

const StyleContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 2;
  justify-content: center;

  .text {
    position: relative;
    flex-direction: column;
    padding: 0.5rem;
  }

  .options {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;

  }
`
export default SliderContent;
