import projects from "../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
        <section
    id="projects"
    className="bg-slate-900 text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">
                Featured Projects
            </h2>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
            Here are some of the projects I've built using
            React, JavaScript, Tailwind CSS, Redux, and modern
            frontend development tools.
            </p>

            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-10
                    mt-16
                ">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
            </div>
        </div>
        </section>
  );
};

export default Projects;