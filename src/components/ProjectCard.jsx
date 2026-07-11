import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../constants/projects";

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 hover:border-blue-500 transition duration-300">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
            />

            <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                    {project.title}
                </h3>
            </div>

            <p className="text-gray-400 mt-4 leading-7">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">

                {project.technologies.map((tech) => (

                    <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                        {tech}
                    </span>

                ))}
            </div>

            <div className="flex gap-4 mt-8">
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg"
                >
                    <FaExternalLinkAlt />
                    Live Demo
                </a>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white hover:bg-white hover:text-black transition px-4 py-2 rounded-lg"
                >
                    <FaGithub />

                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;