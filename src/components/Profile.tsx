import { motion } from 'framer-motion';
import { Code, Layers, PenTool, Database } from 'lucide-react';

const skills = [
    "React", "TypeScript", "Query", "TailwindCSS", "PostgreSQL", "Laravel", "PHP", "MySQL", "System Design", "Bootstarp", "HTML", "CSS", "JavaScript", "Git", "Firebase"
];

export default function Profile() {
    return (
        <section id="profile" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-concrete text-paper overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Column: Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-bold tracking-widest text-blueprint uppercase mb-4">
                        Profile
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                        From Architect <br /> to Software Engineer.
                    </h3>
                    <div className="space-y-6 text-graphite text-lg leading-relaxed">
                        <p>
                            I’m a Software Engineer with a background in architecture and a strong drive for building clean, functional, and impactful software products.
                            My path into software wasn’t linear—I shifted from designing spaces to designing systems, and that transition sharpened my ability to think structurally,
                            solve problems from first principles, and deliver results under pressure.
                        </p>
                        <p>
                            I work comfortably across the stack, with hands-on experience in JavaScript (ES6+),
                            React, Redux, React Query, PHP, and Laravel, and I have a growing focus on system design, scalability, and performance optimization.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <Layers className="text-paper w-8 h-8 mb-2" />
                            <h4 className="font-bold text-paper">System Architecture</h4>
                            <p className="text-sm text-graphite">Scalable & Modular</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Code className="text-paper w-8 h-8 mb-2" />
                            <h4 className="font-bold text-paper">Clean Code</h4>
                            <p className="text-sm text-graphite">Maintainable & Efficient</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Visual/Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Abstract Code Block Visual */}
                    <div className="bg-void p-8 rounded-lg border border-white/5 font-mono text-sm text-graphite shadow-2xl relative overflow-hidden group hover:border-blueprint/30 transition-colors duration-500">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueprint to-transparent" />

                        <pre className="overflow-x-auto">
                            <code>
                                <span className="text-blueprint">class</span> <span className="text-paper">Developer</span> <span className="text-blueprint">extends</span> <span className="text-paper">Architect</span> {'{'}
                                {'\n'}  <span className="text-blueprint">constructor</span>() {'{'}
                                {'\n'}    <span className="text-blueprint">this</span>.stack = [
                                {skills.map((skill, i) => (
                                    <span key={i}>{'\n'}      <span className="text-yellow-300">"{skill}"</span>,</span>
                                ))}
                                {'\n'}    ];
                                {'\n'}  {'}'}
                                {'\n'}
                                {'\n'}  <span className="text-blueprint">render</span>() {'{'}
                                {'\n'}    <span className="text-blueprint">return</span> <span className="text-green-400">"Excellence"</span>;
                                {'\n'}  {'}'}
                                {'\n'}{'}'}
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
