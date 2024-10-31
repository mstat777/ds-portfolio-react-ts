import './About.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import DOMPurify from "dompurify";
import { domPurifyOpenLinksInNewWindow } from '../../utils/sanitize';

export default function About(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;
    const { t } = useTranslation();

    domPurifyOpenLinksInNewWindow();
    const description = DOMPurify.sanitize(t("pages.about.text"));

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main id="about">

            <section className="about">
                <h1>{t("pages.about.title")}</h1>

                <article>
                    <img src={`${IMG_URL}/dimitar.jpg`} alt="Dimitar Statev"/>
                    
                    <div className="description">{parse(description)}</div>
                </article>
            </section>
        </main>
    );
}