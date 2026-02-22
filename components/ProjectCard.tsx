import { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project } : { project: Project}) {
    return (
        <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-101 transition-scale duration-200 ease-in-out ">
            
            <div className="flex items-center mb-2">
                <h3 className="font-semibold text-lg">
                    {project.title} 
                </h3> 
                <StatusBadge status={project.status}/>
            </div>
                

            <p className="text-gray-600 mb-4">{project.description}</p>

            

            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 text-sm">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                    >
                        GitHub
                    </a>
                )}
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                    >
                        {project.liveLinkPlatform}
                    </a>
                )}
            </div>
        </div>
    )
}