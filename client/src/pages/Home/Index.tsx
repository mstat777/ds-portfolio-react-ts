import './Home.scss';
import { useEffect } from 'react';

export default function Home(){

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return ( 
        <main id="home" className="home">
            <section className="home_section">
                <h1>Dimitar Statev - portfolio</h1>
            </section>
        </main>
    );
}