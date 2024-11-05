import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/dimitarstatev-logo-150.png';
import LangSelectorCtn from '../LangSelectorCtn/Index';
import { motion } from 'framer-motion';

export default function Header() {
    const { t } = useTranslation();
    const trPath = "components.header."; // translation path

    const MotionLangSelector = motion.create(LangSelectorCtn);

    const headerVariants = {
        hidden: {
            y: -60
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: .2
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            y: -60
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                //delay: 4, 
                duration: .2
            }
        }
    }

    return (
        <motion.header 
            className="header"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <nav>
                <motion.div 
                    className="logo_ctn"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: .4, duration: .2 }}
                >
                    <NavLink to={"/home"} 
                        onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="Dimitar Statev" />
                    </NavLink>
                </motion.div>

                <ul className="links_ctn">
                    <motion.li
                        variants={navLinkVariants}
                        transition={{ duration: .2 }}
                    >
                        <NavLink to={"/about"}>{t(`${trPath}aboutLink`)}</NavLink>
                    </motion.li>
                    <motion.li
                        variants={navLinkVariants}
                        transition={{ duration: .2, delay: .1 }}
                    >
                        <NavLink to={"/projects"}>{t(`${trPath}projectsLink`)}</NavLink>
                    </motion.li>
                    <motion.li
                        variants={navLinkVariants}
                        transition={{ duration: .2, delay: .2 }}
                    >
                        <NavLink to={"/contact"}>{t(`${trPath}contactLink`)}</NavLink>
                    </motion.li>
                </ul>
            </nav>

            <MotionLangSelector
                initial={{ x: 60 }}
                animate={{ x: 0 }}
                transition={{ delay: .4, duration: .2, type: "tween" }}
            />
        </motion.header>
    )
}