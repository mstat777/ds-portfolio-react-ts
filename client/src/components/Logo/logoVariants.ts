// for the Framer Motion animation

const svgVariants = {
    start: {},
    end: {}
}

const dLetterFillVariants = {
    start: {
        opacity: 0,
        pathLength: 0
    },
    end: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 3.5,
            duration: 1.5,
            ease: "easeInOut"
        }
    }
}
const dLetterVariants = {
    start: {
        opacity: 0,
        pathLength: 0,
        pathOffset: 1
    },
    end: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            delay: .4,
            duration: 2,
            ease: "easeInOut"
        }
    }
}
const cLetterFillVariants = {
    start: {
        opacity: 0,
        pathLength: 0
    },
    end: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 4,
            duration: 1.2,
            ease: "easeInOut"
        }
    }
}
const cLetterVariants = {
    start: {
        opacity: 0,
        pathLength: 0
    },
    end: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 2,
            duration: 1.5,
            ease: "easeInOut"
        }
    }
}
const dashFillVariants = {
    start: {
        opacity: 0,
        pathLength: 0,
        pathOffset: 1
    },
    end: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            delay: 4.7,
            duration: .8,
            ease: "easeInOut"
        }
    }
}
const dashVariants = {
    start: {
        opacity: 0,
        pathLength: 0,
        pathOffset: 1
    },
    end: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            delay: 3.1,
            duration: 1,
            ease: "easeInOut"
        }
    }
}

export {
    svgVariants,
    dLetterFillVariants,
    dLetterVariants,
    cLetterFillVariants,
    cLetterVariants,
    dashFillVariants,
    dashVariants
}