export type Project = {
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
    status: "live" | "code" | "wip";
    github?: string;
    liveLink?: string;
    liveLinkPlatform?: string;
};

export const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "Personal portfolio website built with Next.js and Tailwind",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        highlights: ["Built using App Router", "Reusable Component Structure", "Responsive Layout"],
        status: "wip",
        github: "Placeholder"
    },
    {
        title: "Sonar Scout",
        description: "Sonar Scout was made by a team of 6 developers from 5 different countries who all met at Spelkollektivet, a co-living space for game developers located in Sweden",
        tech: ["Unity", "C#"],
        highlights: ["Full Development Experience", "Steam Deployment", "Published by Spelkollektivet"],
        status: "live",
        liveLink: "https://store.steampowered.com/app/3137740/Sonar_Scout/",
        liveLinkPlatform: "Steam",
    },
    {
        title: "Floop",
        description: "Floop is a game about the phoenix, Simurg, which appears every 90 years to rid the world of Defilements. You must strategize and complete loops to gather strength.",
        tech: ["Unity", "C#"],
        highlights: ["7-day GameJam", "1st Place in Graphics", "1st Place in Gameplay"],
        status: "live",
        liveLink: "https://hjaltetagmose.itch.io/floop",
        liveLinkPlatform: "Itch",
    },
    {
        title: "The Manfisher",
        description: "Use a man as bait to fish for fish. The man harpoons, the fishman reels. Upgrade your man to dive deeper and collect more and more fish.",
        tech: ["Unity", "C#"],
        highlights: ["7-day GameJam", "Rapid Development", "More Responsibility"],
        status: "live",
        liveLink: "https://schubox.itch.io/the-manfisher",
        liveLinkPlatform: "Itch",
    },
];