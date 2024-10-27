import { useEffect } from 'react';
import './Projects.scss';
import global from '../../App.module.scss';

export default function Projects(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return ( 
        <main id="portfolio" className="projects">
            <h1 className={global.hidden}>Portfolio</h1>

            <section className="projects_section">


            </section>
        </main>
    );
}