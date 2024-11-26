import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 p-4 fixed top-0 w-full z-50 shadow-lg">
      <nav className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">John Rika</div>

        {/* Hamburger icon for mobile */}
        <button
          className="text-white lg:hidden"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Links for desktop and mobile */}
        <ul className={`lg:flex space-x-8 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <li><Link to="/" className="text-white hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-blue-300">About</Link></li>
          <li><Link to="/projects" className="text-white hover:text-blue-300">Projects</Link></li>
          <li><Link to="/contact" className="text-white hover:text-blue-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
