import './About.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import DOMPurify from "dompurify";
import { domPurifyOpenLinksInNewWindow } from '../../utils/sanitize';
import { optionSkills } from '../../configs/variables';
import { motion } from 'framer-motion';
import { pageVariants } from '../../configs/motionFramerVariants';

export default function About(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;
    const { t } = useTranslation();
    const trPath = "pages.about."; // translation path

    domPurifyOpenLinksInNewWindow();
    const introText = DOMPurify.sanitize(t(`${trPath}introText`));
    const skillsText = DOMPurify.sanitize(t(`${trPath}skillsText`));
    const finalText = DOMPurify.sanitize(t(`${trPath}finalText`));

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <motion.main 
            id="about"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <section className="about_section">
                <h1>{t(`${trPath}title`)}</h1>

                <article className="about_article">
                    <img 
                        className="profile_img"
                        loading="lazy"
                        src={`${IMG_URL}/dimitar.jpg`} 
                        alt="Dimitar Statev"
                    />
                    
                    <section className="description">
                        {parse(introText, optionSkills)}
                    </section>

                    <section className="description">
                        <h2>{t(`${trPath}skillsTitle`)}</h2>
                        {parse(skillsText, optionSkills)}
                    </section>

                    <section className="description">
                        {parse(finalText, optionSkills)}
                    </section>
                </article>
            </section>
        </motion.main>
    );
}