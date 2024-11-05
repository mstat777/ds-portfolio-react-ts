import './Home.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TypeWriter from '../../effects/TypeWriter/Index';
import { mainVariants } from '../../configs/motionFramer';

export default function Home(){
    const { t } = useTranslation();
    const trPath = "pages.home."; // translation path

    const MotionTypeWriter = motion.create(TypeWriter);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return ( 
        <motion.div 
            className="wrapper"
            variants={mainVariants}
            initial="hidden"
            animate={{ opacity:1 }}
            exit="hidden"
            transition={{ delay: .6, duration: .5 }}
        >
        <main id="home">
            <section className="home_section">
                <h1>{t(`${trPath}title`)}</h1>
                <p className="subtitle">{t(`${trPath}subtitle`)}</p>

                <MotionTypeWriter 
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .2, type: "tween" }}
                    text={t(`${trPath}text`)} 
                />
            </section>
        </main>
        </motion.div>
    );
}