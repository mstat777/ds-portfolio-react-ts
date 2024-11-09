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
            delay: 2.1,
            duration: 1.1,
            ease: "easeInOut"
        }
    }
}
const dLetterVariants = {
    end: {
        opacity: [0, 1, 1, 0],
        pathLength: [0, 1, 1, 1],
        pathOffset: [1, 0],
        transition: {
            opacity: {
                ease: "easeInOut",
                delay: .3,
                duration: 3.6,
                times: [0, 1.4/3.6, 3/3.6, 1]
            },
            pathLength: {
                ease: "easeInOut",
                delay: .3,
                duration: 3.6,
                times: [0, 1.4/3.6, 3/3.6, 1]
            },
            pathOffset: {
                ease: "easeInOut",
                delay: .3,
                duration: 1.4,
                times: [0, 1]
            }
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
            delay: 2.7,
            duration: .7,
            ease: "easeInOut"
        }
    }
}
const cLetterVariants = {
    end: {
        opacity: [0, 1, 1, 0],
        pathLength: [0, 1, 1, 1],
        transition: {
            opacity: {
                ease: "easeInOut",
                delay: 1.3,
                duration: 2.6,
                times: [0, 1/2.6, 2.1/2.6, 1]
            },
            pathLength: {
                ease: "easeInOut",
                delay: 1.3,
                duration: 2.6,
                times: [0, 1/2.6, 2.1/2.6, 1]
            }
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
            delay: 3,
            duration: .5,
            ease: "easeInOut"
        }
    }
}
const dashVariants = {
    end: {
        opacity: [0, 1, 1, 0],
        pathLength: [0, 1, 1, 1],
        pathOffset: [1, 0],
        transition: {
            opacity: {
                ease: "easeInOut",
                delay: 1.9,
                duration: 2,
                times: [0, .7/2, 1.6/2, 1]
            },
            pathLength: {
                ease: "easeInOut",
                delay: 1.9,
                duration: 2,
                times: [0, .7/2, 1.6/2, 1]
            },
            pathOffset: {
                ease: "easeInOut",
                delay: 1.9,
                duration: .7,
                times: [0, 1]
            }
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