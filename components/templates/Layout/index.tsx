import * as React from 'react'
import {CustomParticles} from '@/atoms/Particles'
import {Navbar} from '@/organism/Navbar'
import {ContainerLayout} from "./styles";
import {Background} from "@/atoms/Background";

interface Props {
    children?: React.ReactElement[]
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bg: string = require('images/bg/bg1.jpg?webp');

export const Layout: React.FC<Props> = ({children}) => {

    return (
        <ContainerLayout id="main">
            <div className="layout">
                <Background url={bg}/>
                <CustomParticles/>
                <Navbar/>
                <div className="layout-wrapper">{children}</div>
            </div>
        </ContainerLayout>
    )
}
