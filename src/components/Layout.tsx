import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen bg-void text-paper selection:bg-blueprint selection:text-white">
            <Header />
            <main className="w-full">
                {children}
            </main>

            {/* Temporary Footer Placeholder */}
            <footer className="py-12 text-center text-graphite text-sm">
                &copy; 2025 Aseel Aburumman. All rights reserved.
            </footer>
        </div>
    );
}
