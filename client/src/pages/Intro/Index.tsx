import './Intro.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { randomPosition } from '../../utils/randomize';
import BlinkingText from '../../effects/BlinkingText/Index';
import Loading from '../../components/Loading/Index';

export default function Intro(){
    const { t, ready } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/home');
        }, 3000);

        return () => clearTimeout(timeout);
    },[]);
    
    const textData = ["apple", "orange", "pear", "melon", "cherry", "grapes", "banana", "peach", "abricot", "strawberry", "ananas", "watermelon", "blueberry"]

    const [index, setIndex] = useState<number>(0);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const MotionBlink = motion.create(BlinkingText);

    useEffect(() => {
        const timeout = setInterval(() => {
            setX(randomPosition());
            setY(randomPosition());
            setIndex(index+1);
        }, 5000);

        if (index === textData.length) {
            clearInterval(timeout);
        }

        return () => clearInterval(timeout);
    },[index]);

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
                duration: .5
            }
        },
        exit: {
            opacity: 0,
            transition: { 
                type: "tween",
                ease: "easeInOut",
                duration: .5 
            }
        }
    }

    const textVariations = {
        hidden: {
            opacity: 0,
            x: `${x}vw`,
            y: `${y}vh`,
            fontSize: "22px",
            fontWeight: 700
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 5
            }
        }
    }

    return ( 
        !ready ?
            <Loading/> :
        <motion.main 
            className="intro"
            variants={introVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 5 }}
        >

            <div className="p">
                <h1>{t("pages.intro.welcome")}</h1>
            </div>
{/*}
            <MotionBlink
                variants={textVariations}
                text={textData[index]}
    />*/}
        </motion.main>
    );
}