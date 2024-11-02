import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ProjectData } from '../../configs/interfaces';
import DOMPurify from "dompurify";
import parse from 'html-react-parser';
import { optionSkills } from '../../configs/variables';

export default function ProjectCard({projectData}:{projectData: ProjectData}) {
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    projectData.subtitle = DOMPurify.sanitize(projectData.subtitle);
    projectData.tools = DOMPurify.sanitize(projectData.tools);
    projectData.description = DOMPurify.sanitize(projectData.description);

    return (
        <article className="project_card">
            <div className="project_card_img_ctn">
                <img src={`${IMG_URL}/projects/screenshots/${projectData.images[0]}`} alt=""/>
            </div>

            <div className="project_card_info">
                <h2>{projectData.title}</h2>
                <p className="subtitle">{parse(projectData.subtitle)}</p>

                { projectData.link &&
                    <a href={projectData.link} className="link" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                }

                <div className="tools">{parse(projectData.tools, optionSkills)}</div>

                <p className="description">{parse(projectData.description)}</p>
            </div>
        </article>
    )
}