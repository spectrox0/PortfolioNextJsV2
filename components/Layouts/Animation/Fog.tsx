import React from "react";
import Particle from "react-particles-js"
import styled from 'styled-components'
import {primaryColor} from '../../../helpers/styles'
const Fog: React.FC = () => {
    const [width,setWidth] = React.useState<number>(0)
    React.useEffect(() => {
        setWidth(window.innerWidth)
        const handlingSize = () => {
            setWidth(window.innerWidth)
        }
        addEventListener('resize', handlingSize)
        return () => removeEventListener('resize', handlingSize)
    }, [])
    return (
        <ParticleS params={{
            "particles": {
                move: {
                    speed: 3
                },
                "number": {
                    "value": width>700? 80 : 40
                },
                "size": {
                    "value": 3
                },
                "color": {
                    value: primaryColor,
                }
            },
            "interactivity": {
                'detect_on': 'window',
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "attract"
                    }
                }
            },

        }} />
    )
}

export default Fog;

const ParticleS = styled(Particle)`
  height: 100% !important;
  position: relative;
  width: 100%;
`
