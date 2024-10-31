import './Projects.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ProjectCard from '../../components/ProjectCard/Index';
import { ProjectData } from '../../configs/interfaces';

export default function Projects(){
    const { ready } = useTranslation();
    const projects: ProjectData[] = i18next.t('projects:projects', { returnObjects: true });

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        !ready ?  
            <p>{i18next.t('msg.loadingTranslations')}</p> :
        <main id="projects">
            <section className="projects">
                <h1>{i18next.t('projects:title')}</h1>

                { projects.map((project, i) => 
                    <ProjectCard projectData={project} key={i}/>
                )}
            </section>
        </main>
    );
}