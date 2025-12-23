import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import type { Project } from '../data/projects';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X, Play } from 'lucide-react';

interface ProjectDialogProps {
    visible: boolean;
    onHide: () => void;
    project: Project;
}

export default function ProjectDialog({ visible, onHide, project }: ProjectDialogProps) {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        if (!visible) {
            setShowVideo(false);
        }
    }, [visible, project]);

    useEffect(() => {
        if (!visible) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [visible]);


    if (!project) return null;
    console.log("project.videoUrl", project.videoUrl)

    function toYouTubeEmbed(url: string) {
        try {
            const u = new URL(url);

            // youtu.be/<id>
            if (u.hostname === "youtu.be") {
                const id = u.pathname.replace("/", "").trim();
                return id ? `https://www.youtube.com/embed/${id}` : null;
            }

            // youtube.com/watch?v=<id>
            if (u.hostname.includes("youtube.com")) {
                // /embed/<id>
                if (u.pathname.startsWith("/embed/")) {
                    const id = u.pathname.split("/embed/")[1]?.split("/")[0];
                    return id ? `https://www.youtube.com/embed/${id}` : null;
                }

                const id = u.searchParams.get("v");
                return id ? `https://www.youtube.com/embed/${id}` : null;
            }

            return null;
        } catch {
            return null;
        }
    }

    const embedUrl = project.videoUrl ? toYouTubeEmbed(project.videoUrl) : null;

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            modal
            blockScroll
            dismissableMask
            appendTo={document.body}
            showHeader={false}
            className="w-[96vw] md:w-[92vw] max-w-7xl"
            contentClassName="bg-void text-paper p-0 overflow-hidden"
            // Control height responsively
            style={{ height: 'min(90vh, 900px)' }}
        >
            <div className="relative h-full bg-void text-paper overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onHide}
                    className="absolute top-3 right-3 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                >
                    <X size={22} />
                </button>

                {/* IMPORTANT: h-full + min-h-0 for correct inner scroll behavior */}
                <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-0">
                    {/* Left: Media */}
                    <div className="relative h-[35vh] md:h-full min-h-[240px] md:min-h-0 group">
                        {embedUrl && showVideo ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0"
                            >
                                <iframe
                                    src={`${embedUrl}?autoplay=1&modestbranding=1&rel=0`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                    title={project.title}
                                />
                            </motion.div>
                        ) : (
                            <>
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />

                                {project.videoUrl && (
                                    <button
                                        type="button"
                                        onClick={() => setShowVideo(true)}
                                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        aria-label="Play video"
                                    >
                                        <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                )}
                            </>
                        )}
                    </div>

                    {/* Right: Content (header fixed, description scroll, footer fixed) */}
                    <div className="h-full min-h-0 flex flex-col border-t md:border-t-0 md:border-l border-white/10">
                        {/* Header */}
                        <div className="p-5 md:p-8 border-b border-white/10">
                            <h2 className="text-2xl md:text-4xl font-bold mb-2">{project.title}</h2>
                            <p className="text-blueprint font-medium mb-5">{project.shortTagline}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs md:text-sm border border-white/10 rounded-full text-graphite"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Scrollable description ONLY */}
                        <div
                            className="flex-1 min-h-0 overflow-y-auto p-5 md:p-8 overscroll-contain"
                            onWheel={(e) => e.stopPropagation()} // stops wheel from bubbling to document
                            onTouchMove={(e) => e.stopPropagation()} // mobile
                        >
                            <div className="prose prose-invert max-w-none space-y-4">
                                {project.description.map((paragraph, i) => (
                                    <p key={i} className="text-graphite/90 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Footer buttons */}
                        <div className="p-5 md:p-8 border-t border-white/10 flex flex-wrap gap-3">
                            {project.walkthroughUrl && (
                                <a
                                    href={project.walkthroughUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors font-medium"
                                >
                                    <Play size={18} />
                                    <span>Walkthrough</span>
                                </a>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors font-medium"
                                >
                                    <Github size={18} />
                                    <span>Source Code</span>
                                </a>
                            )}

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 bg-blueprint hover:bg-blueprint/80 text-white rounded-lg transition-colors font-medium"
                                >
                                    <ExternalLink size={18} />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
