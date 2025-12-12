import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import { useEffect } from 'react';

interface ProjectDetailProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
    // Lock body scroll when open
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = originalStyle;
            document.documentElement.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex justify-center bg-void/90 backdrop-blur-sm overflow-y-auto py-4 md:py-12 px-4"
            onClick={onClose}
        >
            <motion.div
                layoutId={`project-${project.id}`}
                className="relative w-full max-w-[1100px] bg-concrete border border-white/10 rounded-lg overflow-hidden shadow-2xl flex flex-col my-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-colors text-white backdrop-blur-md"
                >
                    <X size={24} />
                </button>

                <div className="flex-1">
                    {/* Header */}
                    <div className="p-8 md:p-12 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">{project.title}</h2>
                                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-graphite">
                                    <span className="text-blueprint font-medium">{project.role}</span>
                                    <span>•</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full text-paper/80 bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-12">
                        {/* Left: Cover Image */}
                        <div className="lg:col-span-3">
                            <div className="aspect-video w-full overflow-hidden rounded-lg bg-void/50 border border-white/5 shadow-lg">
                                <motion.img
                                    layoutId={`project-image-${project.id}`}
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Right: Description */}
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <div className="prose prose-invert prose-lg">
                                {project.description.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-paper/80 leading-relaxed mb-6 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Media & Links */}
                    {(project.walkthroughUrl || project.githubUrl || project.liveUrl) && (
                        <div className="p-8 md:p-12 bg-void/30 border-t border-white/10">
                            <h3 className="text-xl font-bold mb-6 tracking-wide">MEDIA & LINKS</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                {project.walkthroughUrl && (
                                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-white/10">
                                        <iframe
                                            src={project.walkthroughUrl}
                                            title="Project Walkthrough"
                                            className="w-full h-full"
                                            allowFullScreen
                                        />
                                    </div>
                                )}

                                <div className={`flex flex-col justify-center gap-4 ${!project.walkthroughUrl ? 'md:col-span-2 md:flex-row' : ''}`}>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
                                        >
                                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">View Code</span>
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-6 py-4 bg-blueprint/10 hover:bg-blueprint/20 border border-blueprint/20 text-blueprint rounded-lg transition-all group"
                                        >
                                            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">View Live Project</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
