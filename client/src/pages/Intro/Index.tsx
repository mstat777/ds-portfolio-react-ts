import './Intro.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MotionLogo from '../../components/Logo/Index';

export default function Intro(){
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/home');
        }, 4800);

        return () => clearTimeout(timeout);
    },[]);

    const introVariants = {
        hidden: {
            opacity: 0,
            originX: "50vw",
            originY: "60px"
        },
        visible: {
            opacity: 1,
            transition: { 
                type: "tween",
                delay: .5,
                duration: 1
            }
        },
        exit: {
            opacity: 0,
            transition: { 
                ease: "easeInOut",
                duration: .5
            }
        }
    }

    return ( 
        <motion.main 
            className="intro"
            variants={introVariants}
        >
            <section className="intro_section">
                <div className="motion_logo_ctn">
                    <MotionLogo/>
                </div>
            </section>
        </motion.main>
    );
};