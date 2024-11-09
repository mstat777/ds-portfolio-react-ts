import './Intro.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loading from '../../components/Loading/Index';
import MotionLogo from '../../components/Logo/Index';

export default function Intro(){
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/home');
        }, 4500);

        return () => clearTimeout(timeout);
    },[]);
    
    /*const textData = ["JavaScript", "React", "Web Applications", "Responsive Design", "Single Page App", "Wireframes", "Websites", "Web content", "Design", "Performance", "Security", "Interaction", "UX Design"]

    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            setX(randomPosition());
            setY(randomPosition());
            setIndex(index+1);
        }, 4000);

        if (index === textData.length) {
            clearInterval(timeout);
        }

        return () => clearInterval(timeout);
    },[index]);*/

    const introVariants = {
        hidden: {
            opacity: 0,
            originX: "50vw",
            originY: "60px"
        },
        visible: {
            opacity: 1,
            transition: { 
                type: "tween",
                delay: .5,
                duration: 1
            }
        },
        exit: {
            opacity: 0,
            transition: { 
                ease: "easeInOut",
                duration: .5
            }
        }
    }

    return ( 
        <motion.main 
            className="intro"
            variants={introVariants}
        >
            <section className="intro_section">
                <div className="motion_logo_ctn">
                    <MotionLogo/>
                </div>
            </section>
        </motion.main>
    );
};