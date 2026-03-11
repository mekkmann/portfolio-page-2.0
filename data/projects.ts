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
        title: "Sonar Scout",
        description: "Sonar Scout was made by a team of 6 developers from 5 different countries who all met at Spelkollektivet, a co-living space for game developers located in Sweden.",
        tech: ["Unity", "C#"],
        highlights: ["Full Development Experience", "Steam Deployment", "Published by Spelkollektivet"],
        status: "live",
        liveLink: "https://store.steampowered.com/app/3137740/Sonar_Scout/",
        liveLinkPlatform: "Steam",
    },
    {
        title: "Habit Tracker Placeholder Name",
        description: "Inspired by the open sourced Loop Habit Tracker with the addition of a live time spent tracker for habits.",
        tech: ["Expo", "TypeScript"],
        highlights: ["React Native"],
        status: "wip",
        
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website (this one) built with Next.js and Tailwind.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        highlights: ["Built using App Router", "Reusable Component Structure", "Responsive Layout"],
        status: "live",
        github: "https://github.com/mekkmann/portfolio-page-2.0"
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
    {
        title: "Väckelsång Leaderboard",
        description: "A website to track Spikeball games and Paper Prototype ideas. A fun little idea that never gained much traction.",
        tech: ["TypeScript", "Next.js"],
        highlights: ["Design", "Community Engagement", "Finding a Need"],
        status: "live",
        liveLink: "https://vklsng-leaderboard.vercel.app",
        liveLinkPlatform: "Link",
    },
    {
        title: "Vereor Nox",
        description: "Darkness has always been one of humanities primal fears.  And there is a good reason for it. What lurks beyond the light should best be left forgotten.",
        tech: ["Unity", "C#"],
        highlights: ["3-day GameJam", "Rapid Development", "Prototyping"],
        status: "live",
        liveLink: "https://scriptmage.itch.io/vereor-nox",
        liveLinkPlatform: "Itch",
    },
    {
        title: "Alaric's Adventure: the Beginning",
        description: "A small text-based adventure I made for school about Alaric and his quest for the perfect baguette.",
        tech: ["C#", ".NET"],
        highlights: ["First Text Adventure", "Solidified Concepts", "First Game Development Experience"],
        status: "live",
        liveLink: "https://mekkmann.itch.io/alarics-adventure-text-based-game",
        liveLinkPlatform: "Itch (I recommend downloading it for full functionality)",
    },
];