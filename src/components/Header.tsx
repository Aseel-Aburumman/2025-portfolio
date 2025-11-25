import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavigationOverlay from './NavigationOverlay';
import clsx from 'clsx';
import logo from '../assets/logo.png';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-30 px-6 py-5 md:px-12 transition-colors duration-300",
                    isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="#" className="z-50 block">
                        <img
                            src={logo}
                            alt="Aseel Aburumman"
                            className="h-12 w-auto object-contain invert"
                        />
                    </a>

                    <button
                        onClick={() => setIsNavOpen(true)}
                        className="group flex items-center gap-2 text-textMain hover:text-accent transition-colors"
                    >
                        <span className="hidden md:block text-sm font-medium tracking-widest uppercase">Menu</span>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.header>

            <NavigationOverlay isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
        </>
    );
}
