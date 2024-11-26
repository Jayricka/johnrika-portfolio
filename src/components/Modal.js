import React from 'react';

const Modal = ({ showModal, toggleModal, project }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p>{project.description}</p>
        <div className="mt-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit Project</a>
        </div>
        <button onClick={toggleModal} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default Modal;
