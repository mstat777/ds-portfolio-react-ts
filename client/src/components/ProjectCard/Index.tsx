import './ProjectCard.scss';
import { forwardRef, Ref, Dispatch, SetStateAction } from 'react';
import { ProjectData } from '../../configs/interfaces';
import { motion } from 'framer-motion';

type Props = {
    projectData: ProjectData;
    index: number;
    setProjectIndex: Dispatch<SetStateAction<number>>;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ProjectCard = forwardRef(({
    projectData, 
    index, 
    setProjectIndex, 
    setShowModal
}: Props, ref: Ref<HTMLElement>) => {
    
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    return (
        <article 
            className="project_card" 
            ref={ref}
        >
            <div className="project_card_img_ctn"
                onClick={() => { 
                    setProjectIndex(index);
                    setShowModal(true);
                }}>
                <img src={`${IMG_URL}/projects/screenshots/${projectData.images[0]}`} alt=""/>
            </div>

            <div className="project_card_info">
                <h2>{projectData.title}</h2>
            </div>
        </article>
    )
});

const MotionProjectCard = motion.create(ProjectCard);

export default MotionProjectCard;