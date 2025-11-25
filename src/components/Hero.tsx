import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            <div className="z-10 text-center mix-blend-difference">
                <motion.h1
                    style={{ y: y1 }}
                    className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-paper"
                >
                    SYSTEM
                </motion.h1>
                <motion.h1
                    style={{ y: y2 }}
                    className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-paper opacity-50"
                >
                    ARCHITECT
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-0 right-0 flex justify-center"
            >
                <div className="flex flex-col items-center gap-2 text-graphite text-sm tracking-widest uppercase">
                    <span>Scroll to Explore</span>
                    <ArrowDown className="animate-bounce w-4 h-4" />
                </div>
            </motion.div>

            {/* Abstract Background Element */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white/5 rounded-full" />
            </div>
        </section>
    );
}
