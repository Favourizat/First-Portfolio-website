import skills from "../constants/skills";

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-slate-950 text-white py-28">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center">
                    My Skills
                </h2>
                <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
                    Here are the technologies and tools I use to build
                    responsive and modern web applications.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500 transition duration-300">
                            <h3 className="text-xl font-semibold">
                                {skill.name}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {skill.category}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;