import Link from "next/link";

export function Hero() {
    return (
        <main className="max-w-3xl mx-auto p-6 text-center mt-20">
            <h1 className="text-4xl font-bold mb-12">
                Hello, I'm Pontus Alexander Liljekvist
            </h1>

            <div className="text-lg text-gray-700 mb-12 space-y-6">
                <div>
                    <p className="font-semibold">Junior Fullstack Developer</p>
                    <p>Specializing in JavaScript/TypeScript, C# and Python.</p>
                    <p>I build clean, user-focused web applications.</p>
                </div>
                <div className="border-t border-gray-300 w-24 mx-auto"></div>
                <div>
                    <p className="font-semibold">Junior Game Developer</p>
                    <p>Specializing in C# and Unity.</p>
                    <p>I build games focused on addictive game loops.</p>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <Link
                    href="/projects"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    View Projects
                </Link>
                <Link
                    href="/contact"
                    className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                    Contact Me
                </Link>
            </div>
        </main>
    );
}