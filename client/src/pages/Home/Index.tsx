import './Home.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TypeWriter from '../../effects/TypeWriter/Index';

export default function Home(){
    const { t } = useTranslation();
    const trPath = "pages.home."; // translation path

    const MotionTypeWriter = motion.create(TypeWriter);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const homePageVariants = {
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
                type: "tween",
                duration: .5
            } 
        }
    }

    return ( 
        <motion.div 
            variants={homePageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
        <main id="home">
            <section className="home_section">
                <h1>{t(`${trPath}title`)}</h1>
                <p className="subtitle">{t(`${trPath}subtitle`)}</p>

                <MotionTypeWriter 
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ 
                        type: "tween",
                        duration: .2 
                    }}
                    text={t(`${trPath}text`)} 
                />
            </section>
        </main>
        </motion.div>
    );
}