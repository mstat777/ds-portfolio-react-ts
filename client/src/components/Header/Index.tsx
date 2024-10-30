import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/dimitarstatev-logo-150.png';
import SwitchLangCtn from '../SwitchLangCtn/Index';

export default function Header() {
    const { t } = useTranslation();
    const trPath = "components.header."; // translation path

    return (
        <header className="header">
            <nav>
                <div className="logo_ctn">
                    <NavLink to={"/home"} 
                        onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="Dimitar Statev" />
                    </NavLink>
                </div>

                <ul className="links_ctn">
                    <li><NavLink to={"/about"}>{t(`${trPath}aboutLink`)}</NavLink></li>
                    <li><NavLink to={"/projects"}>{t(`${trPath}projectsLink`)}</NavLink></li>
                    <li><NavLink to={"/contact"}>{t(`${trPath}contactLink`)}</NavLink></li>
                </ul>
            </nav>

            <SwitchLangCtn />
        </header>
    )
}