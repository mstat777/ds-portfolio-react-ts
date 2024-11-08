import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/dimitarstatev-logo-150.png';
import { motion } from 'framer-motion';
import { memo } from 'react';
import MotionLangSelector from '../LangSelectorCtn/Index';

// memo is in order to avoid rerendering
export default memo(function Header() {
    const { t } = useTranslation();
    const trPath = "components.header."; // translation path

    const headerVariants = {
        hidden: {
            y: -60,
            backgroundColor: "#444"
        },
        visible: {
            y: 0,
            backgroundColor: "#121b2b",
            transition:{ 
                type: "tween", 
                duration: .4,
                when: "beforeChildren"
            }
        }
    }
    const navLinkCtnVariants = {
        hidden: {
            y: -60
        },
        visible: {
            y: 0,
            transition: {
                type: "tween",
                delay: .4, 
                duration: .2,
                when: "beforeChildren",
                staggerChildren: .1
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
                type: "tween",
                duration: .15
            }
        }
    }
    const logoVariants = {
        hidden: {
            x: -100
        },
        visible: {
            x: 0,
            transition: {
                type: "tween",
                delay: .2, 
                duration: .2
            }
        }
    }
    const langSelectorVariants = {
        hidden: {
            x: 60
        },
        visible: {
            x: 0,
            transition: {
                type: "tween",
                delay: .2, 
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
                    variants={logoVariants}
                >
                    <NavLink to={"/home"} 
                        onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="Dimitar Statev" />
                    </NavLink>
                </motion.div>

                <motion.ul 
                    className="links_ctn"
                    variants={navLinkCtnVariants}
                >
                    <motion.li
                        variants={navLinkVariants}
                    >
                        <NavLink to={"/about"}>{t(`${trPath}aboutLink`)}</NavLink>
                    </motion.li>
                    <motion.li
                        variants={navLinkVariants}
                    >
                        <NavLink to={"/projects"}>{t(`${trPath}projectsLink`)}</NavLink>
                    </motion.li>
                    <motion.li
                        variants={navLinkVariants}
                    >
                        <NavLink to={"/contact"}>{t(`${trPath}contactLink`)}</NavLink>
                    </motion.li>
                </motion.ul>

                <MotionLangSelector
                    variants={langSelectorVariants}/>
            </nav>
            
            {/*<MotionLangSelector variants={langSelectorVariants}/>*/}
        </motion.header>
    )
});