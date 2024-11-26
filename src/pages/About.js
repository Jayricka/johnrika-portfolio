import React from "react";
import profileImage from "../assets/images/profile.jpg"; // Import your image

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl p-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="flex items-center space-x-4">
          <img
            src={profileImage} // Display the image
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-600"
          />
          <p className="text-lg">
            Hello, I’m John Rika. I am a passionate developer who loves building
            amazing web applications. I specialize in React and Tailwind CSS to
            create clean, responsive designs. I'm constantly learning and
            improving my skills. This portfolio showcases some of my work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

