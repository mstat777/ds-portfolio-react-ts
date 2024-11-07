import './NotFound.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound(){
    const { t } = useTranslation();
    const trPath = "pages.notFound."; // translation path

    return ( 
        <main id="notFound">
            <h1>{ t(`${trPath}title`) }</h1>
            <p>{ t(`${trPath}text`) } <Link to="/home">{ t(`${trPath}link`) }</Link></p>
        </main>
    );
}