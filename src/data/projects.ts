
export type Project = {
    id: string;
    title: string;
    shortTagline: string;
    techStack: string[];
    role: string;
    year: string;
    thumbnail: string;
    coverImage: string;
    description: string;
    walkthroughUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        id: "1",
        title: "Urban Pulse",
        shortTagline: "Real-time city data visualization platform",
        techStack: ["React", "D3.js", "Mapbox", "Node.js"],
        role: "Frontend Lead",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
        coverImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
        description: "Urban Pulse is a comprehensive dashboard for monitoring city metrics in real-time. It aggregates data from various IoT sensors to provide insights into traffic flow, air quality, and energy consumption. The platform enables city planners to make data-driven decisions and optimize resource allocation.\n\nI led the frontend development, focusing on performance optimization for rendering large datasets and creating intuitive interactive visualizations. The challenge was to maintain 60fps while rendering thousands of data points on a map.",
        githubUrl: "https://github.com/example/urban-pulse",
        liveUrl: "https://urban-pulse.demo.com"
    },
    {
        id: "2",
        title: "Nexus API",
        shortTagline: "High-performance microservices gateway",
        techStack: ["Go", "gRPC", "Redis", "Docker"],
        role: "Backend Architect",
        year: "2023",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
        coverImage: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
        description: "Nexus API is a robust gateway designed to handle high-throughput traffic for microservices architectures. It provides features like rate limiting, authentication, and request transformation out of the box. The system was built to scale horizontally and handle millions of requests per minute with minimal latency.\n\nMy role involved designing the core architecture and implementing the custom load balancing algorithm. I also wrote the comprehensive documentation and set up the CI/CD pipelines.",
        githubUrl: "https://github.com/example/nexus-api"
    },
    {
        id: "3",
        title: "Canvas",
        shortTagline: "Collaborative design system manager",
        techStack: ["TypeScript", "React", "GraphQL", "Storybook"],
        role: "Full Stack Developer",
        year: "2023",
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        description: "Canvas is a tool that helps teams maintain consistency across their digital products. It syncs design tokens from Figma directly to code and manages component documentation. It bridges the gap between designers and developers, ensuring that the implementation always matches the design intent.\n\nI built the synchronization engine that parses Figma files and generates platform-agnostic design tokens. I also developed the React component library used within the application itself.",
        liveUrl: "https://canvas.design"
    },
    {
        id: "4",
        title: "Flow State",
        shortTagline: "Distraction-free writing environment",
        techStack: ["Electron", "React", "Redux", "LocalFirst"],
        role: "Solo Developer",
        year: "2022",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        description: "Flow State is a desktop application designed to help writers focus. It features a minimalist interface, customizable themes, and a 'danger mode' that deletes your work if you stop typing. The goal was to create an environment that induces flow and combats writer's block.\n\nThis was a passion project where I handled everything from product design to implementation. I experimented with local-first architecture to ensure user data is always available and secure on their device.",
        walkthroughUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
        githubUrl: "https://github.com/example/flow-state",
        liveUrl: "https://flowstate.app"
    }
];
