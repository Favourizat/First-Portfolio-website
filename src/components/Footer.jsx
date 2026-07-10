import {
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-6">

          <h3 className="text-2xl font-bold text-white">
            Favour Iwuoha
          </h3>

          <p className="text-gray-400 text-center max-w-xl">
            Frontend Developer passionate about building
            responsive, modern and user-friendly web applications.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={26} />
            </a>

           
            <a
              href="mailto:your@email.com"
              className="text-gray-400 hover:text-red-400 transition"
            >
              <FaEnvelope size={26} />
            </a>

          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Favour Iwuoha. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;