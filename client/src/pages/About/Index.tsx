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
    const description = DOMPurify.sanitize(t(`${trPath}text`));

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

                <article>
                    <img src={`${IMG_URL}/dimitar.jpg`} alt="Dimitar Statev"
                    className="profile_img"/>
                    
                    <div className="description">
                        {parse(description, optionSkills)}
                    </div>
                </article>
            </section>
        </motion.main>
    );
}