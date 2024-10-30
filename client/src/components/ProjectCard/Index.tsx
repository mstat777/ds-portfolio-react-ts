import './ProjectCard.scss';

export default function ProjectCard(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    return (
        <article className="project_card">
            <img src={`${IMG_URL}/projects/screenshots/dimitravel-desktop-home.png`} alt="" className="project_card_img"/>

            <div className="project_card_info">
                <h2>Dimitravel</h2>
                <p className="subtitle">Application web pour une agence de voyage</p>
                <p>Déployé : <a href="https://dt.mitkostatev.com" className="project_link">https://dt.mitkostatev.com</a></p>
                <p><span>Outils : </span>
                <span>JavaScript, React, Express, Sass, HTML, MySQL</span></p>
            </div>

        </article>
    )
}