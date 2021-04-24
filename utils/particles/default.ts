import {IParticlesParams} from 'react-particles-js'
import {paletteColor} from "../../styles/variables";

export const paramsTsParticles: IParticlesParams = {
    fpsLimit: 60,
    detectRetina: true,
    "particles": {
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false
        },
        "number": {
            density: {
                enable: false,
                value_area: 200
            },
            "value": 20
        },
        "size": {
            random: true,
            "value": 3
        },
        "color": {
            value: paletteColor.primaryColor,

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
                distance: 700,
                duration: 0.2
            }
        }
    },


}

