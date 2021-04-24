export const animationLoadingScreenVariant = {
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
    variants: animationLoadingScreenVariant,
    animate: "enter",
    initial: "initial",
    exit: "exit"
}