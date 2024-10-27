import './About.scss';
import { useEffect } from 'react';

export default function About(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main id="about" className="about">

            <section className="about_section">
                <h1>Dimitar Statev</h1>

                <article>
                    <img src={`${IMG_URL}/dimitar-yellow-stilized-w300.jpg`} alt="Dimitar Statev"/>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti molestias itaque facere sit quaerat ex tempora et maiores fugiat asperiores voluptate inventore, eaque obcaecati quas, voluptatem iste debitis magnam eum alias libero expedita hic! Quos quae veritatis, qui voluptatem laboriosam praesentium laborum quas. Necessitatibus, tempore repellat. Consequatur, quod nihil.</p>
                </article>
                
            </section>
        </main>
    );
}