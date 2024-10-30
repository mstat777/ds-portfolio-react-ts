import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ProjectData } from '../../types/types';

export default function ProjectCard({projectData}:{projectData: ProjectData}) {
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    return (
        <article className="project_card">
            <div className="project_card_img_ctn">
                <img src={`${IMG_URL}/projects/screenshots/dimitravel-desktop-home.png`} alt=""/>
            </div>

            <div className="project_card_info">
                <h2>{projectData.title}</h2>
                <p className="subtitle">{projectData.subtitle}</p>
                <a href="https://dt.mitkostatev.com" className="project_link"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <p><span>Outils : </span>
                <span>JavaScript, React, Express, Sass, HTML, MySQL</span></p>
            </div>

        </article>
    )
}