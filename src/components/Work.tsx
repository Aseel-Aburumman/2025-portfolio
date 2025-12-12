import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectDetail from './ProjectDetail';

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="work" className="min-h-screen py-24 px-6 md:px-12 bg-void text-paper relative">
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
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                            onClick={() => setSelectedProject(project)}
                            layoutId={`project-${project.id}`}
                        >
                            <div className="relative overflow-hidden aspect-[4/3] mb-6 border border-white/5 group-hover:border-blueprint/50 transition-colors duration-500 rounded-sm">
                                <div className="absolute inset-0 bg-blueprint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                <motion.img
                                    layoutId={`project-image-${project.id}`}
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 group-hover:border-blueprint/30 transition-colors duration-500">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-2 group-hover:text-blueprint transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-graphite text-lg mb-3 line-clamp-2">
                                            {project.shortTagline}
                                        </p>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-paper transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-blueprint" />
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs font-medium text-graphite/80 border border-white/10 px-2 py-1 rounded-full group-hover:border-white/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-xs font-medium text-graphite/80 border border-white/10 px-2 py-1 rounded-full">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetail
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
