import './PageWrapper.scss';
import { motion } from 'framer-motion';

export default function PageWrapper({child}: {child: React.ReactNode}){

    return ( 
        <motion.div 
            className="wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.3, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            {child}
        </motion.div>
    )
}