import './Projects.scss';
import { useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/Index';

export default function Projects(){

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return ( 
        <main id="projects">
            <section className="projects">
                <h1>Projets</h1>

                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

            </section>
        </main>
    );
}