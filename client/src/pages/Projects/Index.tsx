import './Projects.scss';
import common from '../../App.module.scss';
import { useEffect } from 'react';

export default function Projects(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return ( 
        <main id="projects">
            <section className="projects">
                <h1>Projets</h1>

                <article>
                    <h2>Dimitravel</h2>
                    <p className="subtitle">Application web pour une agence de voyage</p>
                    <p>Déployé <a href="https://dt.mitkostatev.com" className="project_link">https://dt.mitkostatev.com</a></p>
                    <p><span>Outils : </span>
                    <span>JavaScript, React, Express, Sass, HTML, MySQL</span></p>
                </article>


            </section>
        </main>
    );
}