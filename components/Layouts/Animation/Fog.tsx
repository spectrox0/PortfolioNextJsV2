import React from "react";
import Particle from "react-particles-js"
import styled from 'styled-components'
import {primaryColor} from '../../../helpers/styles'
const Fog: React.FC = () => {
    return (
        <ParticleS params={{
            "particles": {
                shadow: {
                    color : {
                        value: primaryColor,
                    }
                },
                move: {
                    speed: 4
                },
                "number": {
                    "value": 100
                },
                "size": {
                    "value": 2
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
