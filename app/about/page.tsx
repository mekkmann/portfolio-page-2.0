import Link from "next/link";

export default function AboutPage () {
    return (
        <main className="max-w-3xl mx-auto p-6 mt-20">
            <h1 className="text-3xl font-bold mb-6">
                About Me
            </h1>

            <section className="space-y-4 mb-8 text-gray-700 text-lg">
                <h2 className="text-2xl">Introduction</h2>
                <p>
                    Full-stack developer who enjoys solving problems, building useful software,
                     and continously learning new technologies.
                </p>
            </section>

            <section className="space-y-4 mb-8 text-gray-700 text-lg">
                <h2 className="text-2xl">
                    Work-centric
                </h2>
                <p>
                    I'm a junior developer focused on both web and game development.
                    I enjoy building projects from the ground up and continously
                    improving my skills through hands-on work.
                </p>

                <p>
                    On the web side, I work primarily with JavaScript/TypeScript,
                    Next.js, C#, and Python, creating clean, maintainable, and user-focused applications.
                    In game development, I use Unity and C# to design smaller games centered around
                    satisfying mechanics and engaging gameplay loops.
                </p>

                <p>
                    I value clarity, usability, and solid architecture. I enjoy solving problems,
                    learning new technologies, and turning ideas into working products.
                </p>

                <p>
                    I'm currently focused on growing as a professional developer and building
                    a strong portfolio of real-world projects.
                </p>
            </section>

            <section className="space-y-4 mb-8 text-gray-700 text-lg">
                <h2 className="text-2xl">
                    Me-centric
                </h2>
                <p>
                    Whem I'm not working, I enjoy programming personal projects, cooking, and learning more about health and nutrition.    
                </p>
                <p>
                    I like building things, experimenting with new ideas, and finding ways to improve both my skills and everyday life.
                </p>
                <p className="mt-12">
                    You can explore my{" "}
                    <Link href="/projects" className="text-blue-600 hover:underline">
                        projects
                    </Link>{" "}
                    or{" "}
                    <Link href="/contact" className="text-blue-600 hover:underline">
                        get in touch
                    </Link>
                    .
                </p>
            </section>
        </main>
    );
};