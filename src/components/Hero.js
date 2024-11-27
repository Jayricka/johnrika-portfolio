import React from 'react';
import heroImage from '../assets/images/your-image.jpg'; // Adjust this relative path based on the location of the Hero.js file

const Hero = () => {
  const handleButtonClick = () => {
    // Example: navigate to the contact section or page
    window.location.href = 'contact'; // Adjust as needed for navigation
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 text-center text-white pt-32">
        <h1 className="text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">
          Hi, I'm John Rika
        </h1>
        <p className="mt-4 text-lg animate__animated animate__fadeIn animate__delay-2s">
          A Full Stack Developer
        </p>
        <button
          onClick={handleButtonClick}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300 ease-in-out z-20"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
