import './SkillCtn.scss';
import { Skill } from '../../configs/variables';

export default function SkillCtn({skill}: {skill: string}) {
    let id: number = -1;

    if (Skill) {
        Skill.forEach((sk, i) => {
            if (sk.name === skill) { 
                id = i;
            }
        })
    }

    return (
        id < 0 ? 
        <p></p> :
        <div className="skill">
            <div className="skill_ctn">
                <img src={Skill[id].image} alt={skill}  className="skill_img"/>
                <span className="skill_name">{skill}</span>
            </div>
        </div>
    )
}