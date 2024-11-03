import './Home.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TypeWriter from '../../effects/TypeWriter/Index';

export default function Home(){
    const { t } = useTranslation();
    const trPath = "pages.home."; // translation path

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return ( 
        <motion.div 
            className="wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
        <main id="home">
            <section className="home">
                <h1>{t(`${trPath}title`)}</h1>
                <p className="subtitle">{t(`${trPath}subtitle`)}</p>
                <div className="text"><TypeWriter text={t(`${trPath}text`)} /></div>
            </section>
        </main>
        </motion.div>
    );
}