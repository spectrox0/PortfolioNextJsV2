import React from "react";
import Particle from "react-particles-js"
import styled from 'styled-components'
import {primaryColor} from '../../../helpers/styles'
const Fog: React.FC = () => {

    return (
        <ParticleS params={{
            fpsLimit: 60,
            detectRetina: true,
            "particles": {
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 3,
                    straight: false
                },
                "number": {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    "value": 40
                },
                "size": {
                    random: true,
                    "value": 3
                },
                "color": {
                    value: primaryColor,

                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
            },
            "interactivity": {
                'detect_on': 'window',
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "attract"
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                     attract: {
                        distance: 200,
                        duration: 0.4
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
