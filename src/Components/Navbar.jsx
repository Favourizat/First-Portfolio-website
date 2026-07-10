import navigation from "../constants/navigation";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Portfolio | Iwuoha Favour
        </h1>
        <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.link}`}
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            {item.title}
          </a>
        </li>
          ))}
        </ul>
      </div>
    </nav>    
  );
};

export default Navbar;