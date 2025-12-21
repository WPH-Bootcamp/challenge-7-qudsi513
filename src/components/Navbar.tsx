// src/components/Navbar.tsx

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-6 px-6 lg:px-32 flex justify-between items-center">
            <div className="flex items-center">
        <img
          src="/assets/logo-symbol.svg"
          alt="Your Logo"
          className="h-12 mr-4"
        />
        <span className="text-2xl font-semibold">Your Logo</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a
          href="#about"
          className="text-lg font-medium hover:text-orange-400 transition"
        >
          About
        </a>
        <a
          href="#service"
          className="text-lg font-medium hover:text-orange-400 transition"
        >
          Service
        </a>
        <a
          href="#projects"
          className="text-lg font-medium hover:text-orange-400 transition"
        >
          Projects
        </a>
        <a
          href="#testimonials"
          className="text-lg font-medium hover:text-orange-400 transition"
        >
          Testimonials
        </a>
        <a
          href="#faq"
          className="text-lg font-medium hover:text-orange-400 transition"
        >
          FAQ
        </a>
      </div>      
      <div>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-400 transition duration-300">
          Let’s Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
