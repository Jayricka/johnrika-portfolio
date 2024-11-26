import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"; // Import the logo

function Header() {
  return (
    <header className="sticky top-0 bg-gray-800 text-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-4" /> {/* Display logo */}
          <h1 className="text-xl font-bold">John Rika</h1> {/* Your Name */}
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-gray-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="hover:text-gray-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:text-gray-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
