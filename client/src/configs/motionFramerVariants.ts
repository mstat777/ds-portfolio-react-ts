// the Motion Framer variants used for the pages animation

export const pageVariants = {
    hidden: {
        opacity: 0,
        transform: "scale(.95)", 
        originX: "50vw",
        originY: "60px"
    },
    visible: {
        opacity: 1,
        transform: "scale(1)", 
        transition: { 
            type: "tween",
            delay: .1,
            duration: .5
        }
    },
    exit: {
        opacity: 0,
        transform: "scale(.95)", 
        transition: { 
            type: "tween",
            ease: "easeInOut",
            duration: .3
        }
    }
}