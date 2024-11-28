import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg"; // Import the logo

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility
  const menuRef = useRef(null); // Ref for the mobile menu container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  // Close the mobile menu if a click is detected outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Listen for mouse click

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-16 h-16 mr-4" /> {/* Display logo */}
            <h1 className="text-2xl font-semibold">John Rika</h1> {/* Your Name */}
          </a>
        </div>
        
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-lg text-gray-200" : "text-lg hover:text-gray-300 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-lg text-gray-200" : "text-lg hover:text-gray-300 transition-colors"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-lg text-gray-200" : "text-lg hover:text-gray-300 transition-colors"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-lg text-gray-200" : "text-lg hover:text-gray-300 transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Icon */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu} // Toggle menu on click
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={menuRef} // Reference to the mobile menu
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "block text-lg text-gray-200" : "block text-lg hover:text-gray-300 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "block text-lg text-gray-200" : "block text-lg hover:text-gray-300 transition-colors"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "block text-lg text-gray-200" : "block text-lg hover:text-gray-300 transition-colors"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "block text-lg text-gray-200" : "block text-lg hover:text-gray-300 transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
