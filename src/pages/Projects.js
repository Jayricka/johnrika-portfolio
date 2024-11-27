import React, { useState } from 'react';

// Import project images and SVGs
import shellImage from '../assets/images/shell-project.jpg';
import hbnbImage from '../assets/images/hbnb-project.jpg';
import dwellingduoImage from '../assets/images/dwellingduo-project.jpg';
import cIcon from '../assets/svgs/c-icon.svg';
import pythonIcon from '../assets/svgs/python-icon.svg';
import htmlIcon from '../assets/svgs/html-icon.svg';
import cssIcon from '../assets/svgs/css-icon.svg';
import jsIcon from '../assets/svgs/js-icon.svg';

const Projects = () => {
  const projects = [
    {
      title: 'Simple Shell Command Line Interface',
      description: 'A simple shell implementation to interact with the system.',
      details: 'This project involved building a simple shell that acts as a command-line interface (CLI) for the operating system. The shell allows users to run basic commands and interact with files.',
      image: shellImage,
      githubUrl: 'https://github.com/Jayricka/simple_shell',
      languages: [
        { name: 'C', icon: cIcon },
      ],
    },
    {
      title: 'Hbnb; Airbnb Clone',
      description: 'A clone of Airbnb with similar features and user experience.',
      details: 'This project involved building a user-friendly platform for property listings with features similar to Airbnb, including user authentication, property management, and dynamic search.',
      image: hbnbImage,
      githubUrl: 'https://github.com/Jayricka/AirBnB_clone',
      languages: [
        { name: 'Python', icon: pythonIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
      ],
    },
    {
      title: 'Dwellingduo',
      description: 'A property listing web platform connecting tenants and landlords.',
      details: 'This platform allows tenants and landlords to find rental properties and manage listings with enhanced features like dynamic search and filtering.',
      image: dwellingduoImage,
      githubUrl: 'https://github.com/Jayricka/dwellingduo',
      languages: [
        { name: 'Python', icon: pythonIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
      ],
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  return (
    <div className="projects-container container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-semibold mb-8">Projects</h1>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" key={index}>
            <img src={project.image} alt={project.title} className="project-image w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button
                onClick={() => openModal(project)}
                className="view-details-btn bg-blue-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-700 transition duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && activeProject && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-content bg-white p-8 rounded-lg w-11/12 sm:w-8/12 lg:w-6/12">
            <button className="close-btn text-2xl absolute top-4 right-4 text-gray-800" onClick={() => setModalOpen(false)}>
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-800">{activeProject.title}</h2>
            <p className="text-gray-700 mt-4">{activeProject.details}</p>
            <div className="languages mt-4">
              {activeProject.languages.map((lang, idx) => (
                <img key={idx} src={lang.icon} alt={lang.name} className="icon w-6 h-6 inline-block mr-2" />
              ))}
            </div>
            <div className="mt-6">
              <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900">
                Visit website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
