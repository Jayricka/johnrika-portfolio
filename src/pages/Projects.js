import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import { FaCode } from 'react-icons/fa';

// Importing project images
import shellImage from '../assets/images/shell-project.jpg'; // Add the correct image path
import hbnbImage from '../assets/images/hbnb-project.jpg'; // Add the correct image path
import dwellingduoImage from '../assets/images/dwellingduo-project.jpg'; // Add the correct image path

// Import language icons
import { FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // Add appropriate icons

const Projects = () => {
  const projects = [
    {
      title: 'Simple Shell Command Line Interpreter/Interface',
      description: 'A simple shell implementation to interact with the system.',
      details: 'This project involved building a simple shell that acts as a command-line interface (CLI) for the operating system. The shell allows users to run basic commands and interact with files.',
      image: shellImage,
      githubUrl: 'https://github.com/Jayricka/simple_shell',
      languages: [
        { name: 'C', icon: <FaCode /> }, // Placeholder for a C icon
      ],
    },
    {
      title: 'Hbnb; Airbnb Clone',
      description: 'A clone of Airbnb with similar features and user experience.',
      details: 'This project involved building a user-friendly platform for property listings with features similar to Airbnb, including user authentication, property management, and dynamic search.',
      image: hbnbImage,
      githubUrl: 'https://github.com/Jayricka/AirBnB_clone',
      languages: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
      ],
    },
    {
      title: 'Dwellingduo',
      description: 'A property listing web platform connecting tenants and landlords.',
      details: 'This platform allows tenants and landlords to find rental properties and manage listings with enhanced features like dynamic search and filtering.',
      image: dwellingduoImage,
      githubUrl: 'https://github.com/Jayricka/dwellingduo',
      languages: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
      ],
    },
  ];

  // State for modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  return (
    <div className="projects-container max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-8">Projects</h1>
      <div className="projects-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300" key={index}>
            <img src={project.image} alt={project.title} className="project-image w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="languages flex space-x-2 mt-4">
                {project.languages.map((lang, i) => (
                  <span key={i} className="language-icon text-lg text-gray-600">{lang.icon}</span>
                ))}
              </div>
              <div className="project-details mt-4">
                <button onClick={() => openModal(project)} className="view-details-btn bg-blue-600 text-white py-2 px-4 rounded-md inline-flex items-center hover:bg-blue-700 transition duration-200">
                  Click to view <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && activeProject && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-content bg-white rounded-lg p-6 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
            <span className="close-btn absolute top-2 right-2 text-xl cursor-pointer" onClick={() => setModalOpen(false)}>&times;</span>
            <h2 className="text-2xl font-semibold text-gray-800">{activeProject.title}</h2>
            <p className="text-gray-700 mt-2">{activeProject.details}</p>
            <div className="languages flex space-x-2 mt-4">
              {activeProject.languages.map((lang, i) => (
                <span key={i} className="language-icon text-lg text-gray-600">{lang.icon}</span>
              ))}
            </div>
            <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-600 hover:text-blue-800">View on GitHub</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
