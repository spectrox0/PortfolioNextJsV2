export const animationAlertVariant = {
    initial: {
        opacity: 0,
        y: '40%'
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4,
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
        y: '40%',
        transition: {
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        }
    },
}

export const propsAlertAnimation = {
    variants: animationAlertVariant,
    animate: "enter",
    initial: "initial",
    exit: "exit"
}


export const animationAlertBackdropVariant = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 0.8,
        transition: {
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.3,
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        }
    },
}

export const propsAlertBackdropAnimation = {
    variants: animationAlertBackdropVariant,
    animate: "enter",
    initial: "initial",
    exit: "exit"
}