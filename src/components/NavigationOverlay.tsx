import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NavigationOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#profile', label: 'Profile' },
    { href: '#work', label: 'Work' },
    { href: '#articles', label: 'Articles' },
    { href: '#contact', label: 'Contact' },
];

export default function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-40 flex items-center justify-center bg-void/95 backdrop-blur-sm"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-2 text-paper hover:text-blueprint transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <nav className="flex flex-col items-center space-y-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className="text-4xl md:text-6xl font-bold text-paper hover:text-blueprint transition-colors tracking-tight"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
