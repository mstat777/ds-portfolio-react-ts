import './Intro.scss';
import { Link } from 'react-router-dom';

export default function Intro(){

    return ( 
        <main className="intro">
            <section className="intro_section">
                <h1>Bienvenue !</h1>
                <Link to="/home" className="enter_btn">Entrer</Link>

            </section>
        </main>
    );
}