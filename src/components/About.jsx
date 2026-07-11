import about from "../constants/about";
import highlights from "../constants/highlights";

const About = () => {
    return (
        <section
            id="about"
            className="bg-slate-900 text-white py-28">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">
                    {about.title}
                </h2>
                <p className="text-blue-400 text-xl mb-8">
                    {about.subtitle}
                </p>
                <p className="text-gray-300 leading-8 max-w-3xl">
                    {about.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-10">

                    {highlights.map((item) => (

                        <div
                            key={item}
                            className="bg-slate-800 rounded-lg p-4"
                        >
                            ✔ {item}
                        </div>

                    ))}

                </div>
            </div>
        </section>
    );
};

export default About;