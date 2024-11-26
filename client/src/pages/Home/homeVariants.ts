export const homeMainVariants = {
    hidden: {
        opacity: 0,
        transform: "scale(.9)", 
        originX: "50vw",
        originY: "60px"
    },
    visible: {
        opacity: 1,
        transform: "scale(1)", 
        transition: { 
            type: "tween",
            delay: 1.2,
            duration: .5
        }
    },
    exit: {
        opacity: 0, 
        transform: "scale(.9)",       
        transition: { 
            ease: "easeInOut",
            duration: .5
        } 
    }
}

export const introSectionVariants = {
    visible: {
        opacity: [1, 1, 0],
        transition: { 
            type: "tween",
            opacity: {
                ease: "easeInOut",
                delay: 2,
                duration: 6,
                times: [0, 5/6, 1]
            },
        }
    }
}

export const generalSectionVariants = {
    visible: {
        opacity: [0, 1],
        transition: { 
            type: "tween",
            opacity: {
                ease: "easeInOut",
                delay: 7.5,
                duration: 1,
                times: [0, 1]
            },
        }
    }
}