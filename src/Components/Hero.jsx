
import profile from "../constants/profile";

const Hero = () => {
    return (
        <section id="home"
            className="min-h-screen bg-slate-950 text-white flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <p className="text-blue-400 text-lg font-medium">
                            {profile.greeting}
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
                            {profile.role}
                        </h1>

                        <p className="text-gray-400 mt-6 max-w-xl leading-8">
                            I build modern, responsive and user-friendly web applications
                            using React, JavaScript and Tailwind CSS.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">

                            <a
                                href="#projects"
                                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
                            >
                                View Projects
                            </a>

                            <a
                                href="/resume/Iwuoha-Favour-Frontend-Developer-Resume.pdf"
                                download
                                className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-lg font-semibold"
                            >
                                Download CV
                            </a>

                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            src="/profile.jpg/profile-img.jpeg"
                            alt="Iwuoha Favour"
                            className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;