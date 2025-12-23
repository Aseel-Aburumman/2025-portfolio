import popupposh from '../assets/projects/popupposh.webp';
import popupposh2 from '../assets/projects/popupposh2.webp';
import KafMueen from '../assets/projects/KafMueen.webp';
import KafMueen2 from '../assets/projects/KafMueen2.webp';
import FeMeal from '../assets/projects/FeMeal.webp';
import FeMeal2 from '../assets/projects/FeMeal2.webp';
import car from '../assets/projects/car.webp';
import car2 from '../assets/projects/car2.webp';
export type Project = {
    id: string;
    title: string;
    shortTagline: string;
    techStack: string[];
    role: string;
    year: string;
    thumbnail: string;
    coverImage: string;
    description: string[];
    walkthroughUrl?: string;
    videoUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        id: "1",
        title: "Pop-up Push",
        shortTagline: "Cloud Digital Signage Platform",
        techStack: ["Laravel", "React.js", "Firebase", "Tailwind CSS", "Bootstrap"],
        role: "Full Stack Developer",
        year: "2024 - 2025",
        videoUrl: "https://youtu.be/Z79sgy24Ij8",
        thumbnail: popupposh2,
        coverImage: popupposh,
        description: [
            "Pop-up Push is a cloud-based digital signage and content management system designed to centrally control, schedule, and distribute rich multimedia content across distributed screens at scale.",
            "The platform replaces rigid, hard-to-maintain signage solutions with a flexible, secure, and remotely managed ecosystem capable of supporting enterprise-level deployments.",
            "I worked as a core engineer on the platform, contributing to both frontend and backend systems, production features, scalability logic, and real client deployments."
        ],
        walkthroughUrl: "https://youtu.be/Z79sgy24Ij8",
        liveUrl: "https://popuppush.com/"
    },
    {
        id: "2",
        title: "KafMueen",
        shortTagline: "The Digital Marketplace for Local Handyman Services",
        techStack: ["Laravel"],
        role: "Full Stack Developer",
        year: "2024",
        videoUrl: "https://youtu.be/By6F2gUA840",
        thumbnail: KafMueen2,
        coverImage: KafMueen,
        description: [
            "Kaf Mueen is a full-stack Laravel web application, It is a digital marketplace that connects customers with local handymen while also supporting integrated e-commerce functionality.",
            "With a data structure that supports flexibility across diverse user roles and e-commerce functionality.",
            "• Users : Admin, Handyman, Client, Store Owner .",
            "• Services tied to categories for easy search and filtering.",
            "• Bookings with timestamps, status updates, and tracking.",
            "• Products under various categories for e-commerce, supporting inventory and pricing management.",
            "• Reviews that contribute to each handyman and product profile, fostering transparency and trust.",

        ],
        githubUrl: "https://github.com/Aseel-Aburumman/KafMueen",
        walkthroughUrl: "https://youtu.be/By6F2gUA840",

    },
    {
        id: "3",
        title: "FeMeals",
        shortTagline: "Personalized Subscription Services",
        techStack: ["Laravel", "React.js", "Bootstrap"],
        role: "Full Stack Developer",
        year: "2024",
        videoUrl: "https://youtu.be/UuBy6dTSffo?si=aFTpeHFlnvkBZ2uh",
        thumbnail: FeMeal,
        coverImage: FeMeal2,
        description: [
            "FeMeal is a healthy-eating subscription platform built to make structured nutrition simple and accessible.",
            "Users can subscribe to curated meal plans based on specific dietary goals—Keto, Vegan, Healthy, and Diabetes-friendly,",
            "choose a subscription class (Basic, Premium, VIP), set delivery dates, and manage their experience through a clean, guided flow.",
            "FeMeal combines:",
            "A public customer-facing website.",
            "A Laravel backend providing authentication, subscriptions, meals/contracts management, and admin portal services.",

        ],
        walkthroughUrl: "https://youtu.be/UuBy6dTSffo?si=aFTpeHFlnvkBZ2uh",
        githubUrl: "https://github.com/Aseel-Aburumman/FeMeals-frontend"
    },
    {
        id: "4",
        title: "DreamRent",
        shortTagline: "Dynamic car rental website",
        techStack: ["Laravel", "Bootstrap"],
        role: "Full Stack Developer",
        year: "2024",
        videoUrl: "https://www.youtube.com/watch?v=m6D0DkGa_5U",

        thumbnail: car,
        coverImage: car2,
        description: [
            "A full-stack car rental web platform inspired by the Airbnb marketplace model, designed to connect car owners with renters through a structured, role-based system.",
            "The platform allows renters to browse available cars, compare prices, select rental periods using an interactive calendar, and complete reservations through a checkout and payment flow. At the same time, car owners (lessors) can list vehicles, manage availability, and control booking approvals.",
            "The system is built with Laravel, following a clear separation of concerns and role-based access control."
        ], walkthroughUrl: "https://www.youtube.com/watch?v=m6D0DkGa_5U",
        githubUrl: "https://github.com/Aseel-Aburumman/DreamRent",
    }
];
