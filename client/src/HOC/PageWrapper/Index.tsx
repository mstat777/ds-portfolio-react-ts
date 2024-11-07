import './PageWrapper.scss';
import { motion } from 'framer-motion';

export default function PageWrapper({child}: {child: React.ReactNode}){

    return ( 
        <motion.div 
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            {child}
        </motion.div>
    )
}