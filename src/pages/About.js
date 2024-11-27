import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaGithub, FaServer, FaBriefcase } from 'react-icons/fa'; // Added FaBriefcase for Work Experience icon
import alxLogo from '../assets/images/alx-logo.png';
import samaLogo from '../assets/images/sama-logo.png';
import upworkLogo from '../assets/images/upwork-logo.png';
import nouvetaLogo from '../assets/images/nouveta-logo.png';
import profile from '../assets/images/profile.jpg'; // Importing the profile image

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl p-4">
        {/* About Me Section */}
        <motion.div
          className="flex items-center space-x-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile} // Use the imported profile image here
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-600"
          />
          <p className="text-lg">
            Hello, I’m John Rika. I am a passionate developer who loves building
            amazing web applications. I specialize in React and Tailwind CSS to
            create clean, responsive designs. I'm constantly learning and
            improving my skills. This portfolio showcases some of my work.
          </p>
        </motion.div>

        {/* Download CV CTA */}
        <motion.div
          className="mb-8 flex justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1TgRAyX68wf5c9gTwsVZE1AkisQq1bDBt"
            download
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Download CV
          </a>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Web Development Card */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 flex flex-col items-center">
              <FaCode className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">Web Development & Design</h4>
              <p className="text-center">
                I specialize in building responsive websites using modern web
                technologies like React, JavaScript, and Tailwind CSS. I create
                visually appealing and user-friendly designs.
              </p>
            </div>

            {/* Database Design Card */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-green-50 flex flex-col items-center">
              <FaDatabase className="w-12 h-12 mb-4 text-green-600" />
              <h4 className="text-xl font-semibold mb-2">Database Design & Administration</h4>
              <p className="text-center">
                I am skilled in designing and managing databases using MySQL and
                MongoDB. I optimize queries and ensure high-performance database
                structures.
              </p>
            </div>

            {/* Version Control Card */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-yellow-50 flex flex-col items-center">
              <FaGithub className="w-12 h-12 mb-4 text-gray-900" />
              <h4 className="text-xl font-semibold mb-2">Version Control (Git)</h4>
              <p className="text-center">
                I have extensive experience using Git for version control. I use
                platforms like GitHub and GitLab to manage and collaborate on code
                changes efficiently.
              </p>
            </div>

            {/* Server Configuration & Management Card */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-purple-50 flex flex-col items-center">
              <FaServer className="w-12 h-12 mb-4 text-purple-600" />
              <h4 className="text-xl font-semibold mb-2">Server Configuration & Management</h4>
              <p className="text-center">
                I specialize in configuring and managing servers, ensuring high availability, and optimizing system performance.
                I have experience with Linux-based environments and various server technologies like Apache, Nginx, and cloud services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {/* Work Experience Title */}
      <h3 className="text-2xl font-semibold mb-4 text-center">
        <FaBriefcase className="inline-block w-8 h-8 text-blue-600 mr-2" />
        Work Experience
      </h3>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>

        {/* Work Experience Timeline */}
        <div className="space-y-12">
          {/* ALX Africa */}
          <div className="flex items-center relative">
            <div className="w-1/2 pr-8 text-right">
              <h4 className="text-xl font-semibold text-blue-600">Software Developer Intern</h4>
              <p className="text-gray-500 mb-2">2023 - Present | ALX Africa | Nairobi, Kenya</p>
              <ul className="list-disc space-y-2 text-gray-700 pl-6 pr-6 text-left">
                <li>Developed and maintained web applications using Python and Django.</li>
                <li>Collaborated with the design team to improve UI/UX.</li>
                <li>Implemented REST APIs and optimized performance.</li>
              </ul>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-white rounded-full border-4 border-blue-600 shadow-lg flex items-center justify-center">
                <img
                  src={alxLogo} // Using the imported logo
                  alt="ALX Africa"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Sama */}
          <div className="flex items-center flex-row-reverse relative">
            <div className="w-1/2 pl-8 text-left">
              <h4 className="text-xl font-semibold text-green-600">Associate</h4>
              <p className="text-gray-500 mb-2">August 2023 - August 2024 | Sama | Nairobi, Kenya</p>
              <ul className="list-disc space-y-2 text-gray-700 pl-6 pr-6 text-left">
                <li>Implemented data-driven solutions to enhance performance.</li>
                <li>Ensured high-quality data labeling for AI models.</li>
                <li>Developed validation processes to maintain data integrity.</li>
              </ul>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-white rounded-full border-4 border-green-600 shadow-lg flex items-center justify-center">
                <img
                  src={samaLogo} // Using the imported logo
                  alt="Sama"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Freelancer */}
          <div className="flex items-center relative">
            <div className="w-1/2 pr-8 text-right">
              <h4 className="text-xl font-semibold text-blue-600">Freelancer</h4>
              <p className="text-gray-500 mb-2">January 2021 - Present | Upwork (Remote)</p>
              <ul className="list-disc space-y-2 text-gray-700 pl-6 pr-6 text-left">
                <li>Collaborated with clients to address data analysis needs.</li>
                <li>Transformed data to facilitate analysis.</li>
                <li>Created reports and visualizations for data insights.</li>
              </ul>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-white rounded-full border-4 border-blue-600 shadow-lg flex items-center justify-center">
                <img
                  src={upworkLogo} // Using the imported logo
                  alt="Upwork"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Nouveta */}
          <div className="flex items-center flex-row-reverse relative">
            <div className="w-1/2 pl-8 text-left">
              <h4 className="text-xl font-semibold text-yellow-600">I.T Intern</h4>
              <p className="text-gray-500 mb-2">January 2021 - May 2021 | Nouveta Limited | Nairobi, Kenya</p>
              <ul className="list-disc space-y-2 text-gray-700 pl-6 pr-6 text-left">
                <li>Enhanced ERP and CRM system efficiency.</li>
                <li>Streamlined billing processes and ensured timely transactions.</li>
                <li>Maintained data integrity through reporting and tabulation.</li>
              </ul>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-white rounded-full border-4 border-yellow-600 shadow-lg flex items-center justify-center">
                <img
                  src={nouvetaLogo} // Using the imported logo
                  alt="Nouveta"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
      </div>
    </div>
  );
}

export default About;
