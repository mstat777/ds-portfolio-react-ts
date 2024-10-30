import './Intro.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Intro(){
    const { t } = useTranslation();

    return ( 
        <main className="intro">
            <section className="intro_section">
                <h1>{t("pages.intro.welcome")}</h1>

                <Link to="/home" className="enter_btn">
                    {t("pages.intro.btn")}
                </Link>

            </section>
        </main>
    );
}