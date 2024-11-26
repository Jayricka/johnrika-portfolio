import React, { useState } from 'react';

const Projects = () => {
  // Example project data
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      details: 'Detailed information about Project 1, including features, technologies, and challenges.',
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      details: 'Detailed information about Project 2, including features, technologies, and challenges.',
    },
    {
      title: 'Project 3',
      description: 'This is a brief description of Project 3.',
      details: 'Detailed information about Project 3, including features, technologies, and challenges.',
    },
  ];

  // State for modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveProject(null);
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className="mt-4">Here are some of the projects I've worked on:</p>
      
      {/* Project cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <button
                className="mt-4 text-blue-500 hover:text-blue-700 font-semibold"
                onClick={() => openModal(project)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold">{activeProject.title}</h2>
            <p className="mt-4 text-gray-700">{activeProject.details}</p>
            <button
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
