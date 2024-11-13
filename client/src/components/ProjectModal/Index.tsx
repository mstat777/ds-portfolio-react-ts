import './ProjectModal.scss';
import { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import DOMPurify from "dompurify";
import parse from 'html-react-parser';
import { optionSkills } from '../../configs/variables';
import { ProjectData } from '../../configs/interfaces';

type Props = {
    projectData: ProjectData | null;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function ProjectModal({ 
    projectData, 
    setShowModal
}: Props) {

    const IMG_URL = process.env.REACT_APP_IMG_URL;

    if (projectData) {
        projectData.subtitle = DOMPurify.sanitize(projectData.subtitle);
        projectData.tools = DOMPurify.sanitize(projectData.tools);
        projectData.description = DOMPurify.sanitize(projectData.description);
    }

    return (
        projectData && 
        <div className="modal_ctn">
            <article className="project_modal">
                <button 
                    className="close_btn"
                    onClick={() => setShowModal(false)}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                <div className="project_modal_img_ctn">
                    <img src={`${IMG_URL}/projects/screenshots/${projectData.images[0]}`} alt={projectData.images[0]}/>
                </div>

                <div className="project_modal_info">
                    <div className="info_header">
                        <h2>{projectData.title}</h2>

                        <div className="links">
                            { projectData.linkGitHub &&
                                <a href={projectData.linkGitHub} target="_blank" rel="noreferrer" className="pulsate">
                                    <span>GitHub</span>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            }
                            { projectData.linkSite &&
                                <a href={projectData.linkSite} target="_blank" rel="noreferrer" className="pulsate">
                                    <span>Site</span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="pulsate"/>
                                </a>
                            }
                        </div>
                    </div>

                    <p className="subtitle">
                        {parse(projectData.subtitle)}
                    </p>

                    <div className="tools">
                        {parse(projectData.tools, optionSkills)}
                    </div>

                    <p className="description">
                        {parse(projectData.description)}
                    </p>
                
                </div>
            </article>
        </div>
    );
}