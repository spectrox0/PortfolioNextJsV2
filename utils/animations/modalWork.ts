export const animationModalWorkVariant = {
    initial: {
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        x: '10%',
        opacity: 0,
        originX: 0.5,
        originY: 0.5,
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        x: '-10%',
        opacity: 0,
        originX: 0.5,
        originY: 0.5,
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        }
    },
}

export const propsModalWorkAnimation = {
    variants: animationModalWorkVariant,
    animate: "enter",
    initial: "initial",
    exit: "exit"
}