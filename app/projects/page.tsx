import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="max-w-3xl mx-auto p-6 mt-20">
            <h1 className="text-2xl font-semibold mb-4">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-2">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </main>
    );
}