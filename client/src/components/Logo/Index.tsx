import './Logo.scss';
import { forwardRef, Ref } from 'react';
import { motion } from "framer-motion";
import {
    svgVariants,
    dLetterFillVariants,
    dLetterVariants,
    cLetterFillVariants,
    cLetterVariants,
    dashFillVariants,
    dashVariants
} from './logoVariants';

const Logo = forwardRef((props: React.SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {

    return (
        <motion.svg 
            ref={ref}
            className="motion_logo_ctn"
            variants={svgVariants}
            initial="start"
            animate="end"
            viewBox="0 0 1024 768" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" strokeLinecap="round" 
            strokeLinejoin="round" 
            xmlSpace="preserve" 
        >  
            
            <motion.path 
                className="d_letter_fill"
                strokeLinecap="square"
                variants={dLetterFillVariants}
                transform="translate(25, 19) scale(0.95)"
                d="M472.5 10V502Q464 664 282 678 103 671 86 476 100 278 279 272L348 272" /> 
            <motion.path 
                className="d_letter"
                variants={dLetterVariants}
                transform="translate(25, 19) scale(0.95)"
                d="M394 10H551V502Q550 593 499 654 465 697 406 729 353 759 280 758 212 758 143 718 77 677 44 615 11 563 10 476 10 398 44 337 74 279 143 233 218 193 280 193L348 193V351H280Q228 354 198 388 168 422 167 476 167 526 200 565 238 601 280 601 328 600 357 575 391 547 394 502V10Z" />

            <motion.path 
                className="c_letter_fill"
                strokeLinecap="square"
                variants={cLetterFillVariants}
                transform="translate(25, 19) scale(0.95)"
                d="M1014 269.5H811A1 1 0 00811 468H969" />  
            <motion.path 
                className="c_letter"
                variants={cLetterVariants}
                transform="translate(25, 19) scale(0.95)"
                d="M1014 200H811A1 1 0 00811 537H881L969 399H810A1 1 0 01810 339H925L1014 200Z" />
            
            <motion.path 
                className="dash_fill"
                strokeLinecap="square"
                variants={dashFillVariants}
                transform="translate(25, 19) scale(0.95)"
                d="M970 689H553Z" />
            <motion.path 
                className="dash"
                variants={dashVariants}
                transform="translate(25, 19) scale(0.95)"
                d="M970 620V758H553L641 620H970Z" />
    
    </motion.svg>
    );
});

const MotionLogo = motion.create(Logo);

export default MotionLogo;