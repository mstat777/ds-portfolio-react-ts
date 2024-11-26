import './Home.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { homeMainVariants, 
        introSectionVariants,
        generalSectionVariants } from './homeVariants';
import TypeWriter from '../../effects/TypeWriter/Index';
import parse from 'html-react-parser';
import DOMPurify from "dompurify";
import { domPurifyOpenLinksInNewWindow } from '../../utils/sanitize';
import SkillSection from '../../components/SkillSection/Index';

export default function Home(){
    const { t } = useTranslation();
    const trPath = "pages."; // translation path

    const MotionTypeWriter = motion.create(TypeWriter);
    const [loadTypeWriter, setLoadTypeWriter] = useState<boolean>(false);
    domPurifyOpenLinksInNewWindow();
    const aboutText = DOMPurify.sanitize(t(`${trPath}home.aboutText`));

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        const timeout = setTimeout(() => setLoadTypeWriter(true), 1500);

        return () => clearTimeout(timeout);
    },[loadTypeWriter]);

    return ( 
        <motion.main 
            id="home"
            variants={homeMainVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.section 
                className="home_intro_section"
                variants={introSectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h1>{t(`${trPath}home.title`)}</h1>
                <p className="subtitle">{t(`${trPath}home.subtitle`)}</p>

                <div className="home_typewriter_ctn">
                    <span>.</span>
                    { loadTypeWriter &&
                    <MotionTypeWriter 
                        className="typewriter"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ 
                            type: "tween",
                            duration: .2 
                        }}
                        text={t(`${trPath}home.text`)} 
                    />
                    }
                </div>
            </motion.section>

            <motion.section 
                className="home_general_section"
                variants={generalSectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <article>
                    <div className="container">
                        <h2>{t(`${trPath}home.aboutTitle`)}</h2>
                        <div className="large">{parse(aboutText)}</div>
                    </div>
                </article>

                <article>
                    <div className="container">
                        <h2>{t(`${trPath}home.skillsTitle`)}</h2>
                        <SkillSection className="skill_ctn"/>
                    </div>
                </article>
               
            </motion.section>
        </motion.main>
    );
}