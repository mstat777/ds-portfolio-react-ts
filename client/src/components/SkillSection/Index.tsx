import { Skill } from '../../configs/variables';

export default function SkillSection({className}: {className: string}) {

    return (
        <div className={className}>
            { Skill.map((sk, i) => 
                <img 
                    src={sk.image} 
                    alt={sk.name} 
                    key={i}
                />
            )}
        </div>
    )
}