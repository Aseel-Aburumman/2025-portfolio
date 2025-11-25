import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-between py-24 px-6 md:px-12 bg-concrete text-paper">
            <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[10vw] font-bold leading-none tracking-tighter mb-12">
                        LET'S <br /> <span className="text-graphite">CONSTRUCT</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl text-graphite max-w-md">
                                Ready to turn your blueprints into digital reality?
                                I'm currently available for freelance projects and open to full-time opportunities.
                            </p>

                            <a
                                href="mailto:hello@aseel.dev"
                                className="inline-flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-blueprint transition-colors group"
                            >
                                <span>hello@aseel.dev</span>
                                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-sm font-bold tracking-widest uppercase text-graphite">Socials</h3>
                            <div className="flex gap-6">
                                <a href="#" className="p-4 border border-white/10 rounded-full hover:bg-paper hover:text-void transition-all duration-300">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-4 border border-white/10 rounded-full hover:bg-paper hover:text-void transition-all duration-300">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-4 border border-white/10 rounded-full hover:bg-paper hover:text-void transition-all duration-300">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-graphite">
                <p>&copy; 2025 Aseel Aburumman. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed & Built with React + Tailwind</p>
            </footer>
        </section>
    );
}
