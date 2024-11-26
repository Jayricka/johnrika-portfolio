import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
      <div className="text-center">
        <p>&copy; 2024 John Rika</p>
        <p>Follow me on:
          <a href="https://github.com/john-rika" className="ml-2 hover:text-blue-300">GitHub</a> |
          <a href="https://www.linkedin.com/in/john-rika" className="ml-2 hover:text-blue-300">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
