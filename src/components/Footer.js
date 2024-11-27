import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // FontAwesome icons

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mt-8 shadow-xl">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Left Side: Copyright Section */}
        <div>
          <p className="text-lg font-semibold tracking-wider">
            Copyright &copy; 2024 John Rika. All Rights Reserved.
          </p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-10 text-3xl">
          <a
            href="https://github.com/john-rika"
            className="hover:text-blue-300 transition transform hover:scale-110 hover:translate-y-1"
            aria-label="GitHub"
            title="Visit my GitHub"
          >
            <FaGithub />
            <span className="block mt-2 text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/john-rika"
            className="hover:text-blue-300 transition transform hover:scale-110 hover:translate-y-1"
            aria-label="LinkedIn"
            title="Visit my LinkedIn"
          >
            <FaLinkedin />
            <span className="block mt-2 text-sm">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Bottom: Additional Message */}
      <div className="text-center mt-6">
        <p className="text-sm opacity-75">
          Built with ❤️ by John Rika
        </p>
      </div>
    </footer>
  );
}

export default Footer;
