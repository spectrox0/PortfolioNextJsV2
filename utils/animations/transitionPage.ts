export const animationPageVariant = {
    initial: {
        opacity: 0,
        y: '10%'
    },
    enter: {
        opacity: 1,
        y: '0',
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        }
    },
}
export const animationPageSimpleVariant = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        }
    },
}
export const propsPage = {
    variants: animationPageVariant,
    animate: "enter",
    initial: "initial",
    exit: "exit"
}

export const propsPageSimple = {
    variants: animationPageSimpleVariant,
    animate: "enter",
    initial: "initial",
    exit: "exit"
}


export const AboutMeVariant = {
    initial: {
        opacity: 0,
        y: 50,
    },
    enter: {
        y:0,
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

export const HomeVariant = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
    },
}
export const WorkVariant = {
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
