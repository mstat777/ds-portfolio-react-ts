import './Intro.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TypeWriter from '../../effects/TypeWriter/Index';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Intro(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/home');
        }, 1000);

        return () => clearTimeout(timeout);
    },[]);

    return ( 
        <motion.div 
            className="wrapper"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <main className="intro">
            <section className="intro_section">
                <h1>{t("pages.intro.welcome")}</h1>
            </section>
        </main>
        </motion.div>
    );
}