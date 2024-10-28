import './About.scss';
import { useEffect } from 'react';

export default function About(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main id="about">

            <section className="about">
                <h1>Dimitar Statev</h1>

                <article>
                    <img src={`${IMG_URL}/dimitar-yellow-stilized-w300.jpg`} alt="Dimitar Statev"/>
                    
                    <p>Je suis développeur web pationné par la création des applications et des sites web.</p>

                    <p>J'ai aussi un diplôme en architecture.</p>

                    <p>Voici mon CV : télécharger</p>
                </article>
                
            </section>
        </main>
    );
}