import { useTranslation } from 'react-i18next';
import './Footer.scss';

export default function Footer() {
    const { t } = useTranslation();
    const trPath = "components.footer."; // translation path

    return ( 
        <footer className="footer">
            <section className="footer_legal">
                <p>{t(`${trPath}rights`)}</p>
            </section>
        </footer>
    )
}