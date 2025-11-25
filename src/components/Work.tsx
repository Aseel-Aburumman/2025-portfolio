import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    year: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Urban Pulse",
        category: "Data Visualization",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
        year: "2024"
    },
    {
        id: 2,
        title: "Nexus API",
        category: "Backend Architecture",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2070&auto=format&fit=crop",
        year: "2023"
    },
    {
        id: 3,
        title: "Canvas",
        category: "Design System",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        year: "2023"
    },
    {
        id: 4,
        title: "Flow State",
        category: "Productivity App",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        year: "2022"
    }
];

export default function Work() {
    return (
        <section id="work" className="min-h-screen py-24 px-6 md:px-12 bg-void text-paper">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-[10vw] md:text-[6vw] font-bold leading-none tracking-tighter">
                        SELECTED <br /> <span className="text-graphite">WORK</span>
                    </h2>
                    <span className="hidden md:block text-sm tracking-widest uppercase text-graphite mb-2">
                        (2022 — 2024)
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            <div className="relative overflow-hidden aspect-[4/3] mb-6">
                                <div className="absolute inset-0 bg-blueprint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="flex items-start justify-between border-t border-white/10 pt-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-blueprint transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-graphite uppercase tracking-wider">
                                        {project.category}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-graphite">{project.year}</span>
                                    <ArrowUpRight className="w-5 h-5 text-paper transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
