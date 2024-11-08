import './App.module.scss';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { DataLayerContext } from './context/DataLayerProvider';
import { useContext, useEffect, useState } from 'react';
import { getLanguage, changeLanguage } from './i18n';
import { AnimatePresence } from 'framer-motion';

// ------------------- COMPONENTS  -----------------------
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import Loading from './components/Loading/Index';

// --------------------- PAGES  --------------------------
import Intro from './pages/Intro/Index';
import Home from './pages/Home/Index';
import Projects from './pages/Projects/Index';
import About from './pages/About/Index';
import Contact from './pages/Contact/Index';
import NotFound from './pages/NotFound/Index';

export default function App() {
    const location = useLocation();
    const DATA_LAYER = useContext(DataLayerContext);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => { 
        if (DATA_LAYER?.locStLang) {
            if (DATA_LAYER?.currLang) {
                if (DATA_LAYER.currLangImg) {
                    // if the language & its image are defined in the context AND in the localStorage, then stop the loading bar
                    setIsLoading(false);
                } else {
                    // the language image is NOT loaded, then load it
                    DATA_LAYER.changeLangImage(DATA_LAYER?.locStLang);
                }
            } else {
                // the language is defined in localStorage, but NOT in the context
                DATA_LAYER?.setCurrLang(DATA_LAYER?.locStLang);
                // change the default language in i18next
                changeLanguage(DATA_LAYER?.locStLang);
            }
        } else { 
            // the language is NOT defined at all, then set the i18n default language
            const defaultLang = getLanguage();
            localStorage.setItem("lang", defaultLang);
            DATA_LAYER?.setLocStLang(defaultLang);
            DATA_LAYER?.setCurrLang(defaultLang);
        }
    },[DATA_LAYER?.locStLang, DATA_LAYER?.currLang, DATA_LAYER?.currLangImg]);

    return (
        isLoading ? 
            <Loading /> :
            
            <>
            { location.pathname !== '/intro' &&
                <Header />
            }

            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.key}>
                    <Route index element={<Navigate to="/intro" replace />}/>
                    
                    <Route path="/intro" element={<Intro/>}/>

                    <Route path="/">
                        <Route path="home" element={<Home/>}/>
                        <Route path="projects" element={<Projects/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </AnimatePresence>

            { location.pathname !== '/intro' &&
                <Footer />
            }
            </>
    );
}