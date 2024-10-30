import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/dimitarstatev-logo-150.png';
import SwitchLangCtn from '../SwitchLangCtn/Index';

export default function Header() {
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
                    <li><NavLink to={"/projects"}>projects</NavLink></li>
                    <li><NavLink to={"/about"}>à propos</NavLink></li>
                    <li><NavLink to={"/contact"}>contact</NavLink></li>
                </ul>
            </nav>

            <SwitchLangCtn />
        </header>
    )
}