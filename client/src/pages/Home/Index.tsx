import './Home.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home(){
    const { t } = useTranslation();
    const trPath = "pages.home."; // translation path

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return ( 
        <main id="home">
            <section className="home">
                <h1>{t(`${trPath}title`)}</h1>
                <p className="subtitle">{t(`${trPath}subtitle`)}</p>
                <p className="text">{t(`${trPath}text`)}</p>
            </section>
        </main>
    );
}