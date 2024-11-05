import './Projects.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ProjectCard from '../../components/ProjectCard/Index';
import { ProjectData } from '../../configs/interfaces';
import { motion } from 'framer-motion';
import { mainVariants } from '../../configs/motionFramer';

export default function Projects(){
    const { ready } = useTranslation();
    const projects: ProjectData[] = i18next.t('projects:projects', { returnObjects: true });

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        !ready ?  
            <p>{i18next.t('msg.loadingTranslations')}</p> :
        <motion.div 
            className="wrapper"
            variants={mainVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
        <main id="projects">
            <section className="projects_section">
                <h1>{i18next.t('projects:title')}</h1>

                <section className="projects_grid">
                    { projects.map((project, i) => 
                        <ProjectCard projectData={project} key={i}/>
                    )}
                </section>
            </section>
        </main>
        </motion.div>
    );
}