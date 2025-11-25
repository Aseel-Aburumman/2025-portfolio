import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-void text-paper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            ASEEL ABURUMMAN
                        </h1>
                        <p className="mt-2 text-sm md:text-base text-graphite tracking-widest uppercase">
                            22222 Architect of Code
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
