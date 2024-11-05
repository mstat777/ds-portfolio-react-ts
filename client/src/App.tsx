import './App.module.scss';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

// ------------------- CONTAINERS  -----------------------
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';

// --------------------- PAGES  --------------------------
import Intro from './pages/Intro/Index';
import Home from './pages/Home/Index';
import Projects from './pages/Projects/Index';
import About from './pages/About/Index';
import Contact from './pages/Contact/Index';
import NotFound from './pages/NotFound/Index';

export default function App() {

    function IntroLayout() {
        return <Outlet/>
    }
    
    function GeneralLayout() {
        return <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate to="/intro" replace />}/>
                
                <Route path="/intro" element={<IntroLayout/>}>
                    <Route index element={<Intro/>}/>
                </Route>

                <Route path="/" element={<GeneralLayout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}