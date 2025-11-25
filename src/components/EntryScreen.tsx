import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../assets/main.css';


interface EntryScreenProps {
    onComplete: () => void;
}

export default function EntryScreen({ onComplete }: EntryScreenProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Hold for 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {isVisible && (
                <motion.div
                    className="fixed !w-100 inset-0 z-50 flex items-center justify-center bg-void text-paper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-center w-100"
                        style={{width: "100%"}}
                         
                    >

                        <svg height="100" stroke="#ffffffff" stroke-width="2" className="text-line" width="100%">
                            <text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">
                                ASEEL ABURUMMAN
                            </text>
                        </svg>


                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


{/* <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            ASEEL ABURUMMAN
                        </h1>
                        <p className="mt-2 text-sm md:text-base text-graphite tracking-widest uppercase">
                            Architect of Code
                        </p> */}