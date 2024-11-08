import './Projects.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import MotionProjectCard from '../../components/ProjectCard/Index';
import { ProjectData } from '../../configs/interfaces';
import { motion } from 'framer-motion';
import { pageVariants } from '../../configs/motionFramerVariants';
import Loading from '../../components/Loading/Index';

export default function Projects(){
    const { ready } = useTranslation();
    const projects: ProjectData[] = i18next.t('projects:projects', { returnObjects: true });

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const sectionVariants = {
        hidden: {
            y: 0
        },
        visible: {
            y: 0,
            transition: {
                delay: .2,
                when: "beforeChildren",
                staggerChildren: .2
            }
        }
    }

    const cardVariants = {
        hidden:{
            y: "100vh"
        },
        visible: {
            y: 0,
            transition: {
                type: "tween",
                duration: .6
            }
        }
    }

    return (
        !ready ?  
            <Loading/> :
        
        <motion.main 
            id="projects"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <section className="projects_section">
                <h1>{i18next.t('projects:title')}</h1>

                { projects.length && 
                <motion.section 
                    className="projects_grid"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    { projects.map((project, i) => 
                            <MotionProjectCard 
                                projectData={project} 
                                key={i}
                                variants={cardVariants}
                            />
                    )}
                </motion.section>
                }
            </section>
        </motion.main>
    );
}