import './About.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import DOMPurify from "dompurify";

export default function About(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;
    const { t } = useTranslation();
/*
    const someHtml = "<div>Hello dude! <a>I'm Jerry</a><br/><ol><li>Ano</li><li>Efa</li><li>ITchi</li></ol><div>";
    const sanitizedHtml = DOMPurify.sanitize(someHtml);*/

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main id="about">

            <section className="about">
                <h1>{t("pages.about.title")}</h1>

                <article>
                    <img src={`${IMG_URL}/dimitar.jpg`} alt="Dimitar Statev"/>
                    
                    <div>{t("pages.about.text")}</div>
                </article>
                {/* parse(sanitizedHtml)*/}
            </section>
        </main>
    );
}