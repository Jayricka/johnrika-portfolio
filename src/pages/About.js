import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaGithub, FaServer, FaBriefcase } from 'react-icons/fa'; // Added FaBriefcase for Work Experience icon
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
          <h3 className="text-2xl font-semibold mb-4">
            <FaBriefcase className="inline-block w-8 h-8 text-blue-600 mr-2" />
            Work Experience
          </h3>
          <div className="relative flex justify-center items-center">
            {/* Vertical Line */}
            <div className="w-1 bg-gray-400 h-full absolute left-1/2 transform -translate-x-1/2"></div>

            <div className="flex flex-col items-center relative">
              {/* Freelancer Job */}
              <div className="flex flex-col items-center mb-8 relative nth-child:odd:flex-row-reverse">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-blue-600 bg-white shadow-lg z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <img
                    src="path/to/upwork-logo.png"
                    alt="Upwork Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-blue-600">Freelancer</h4>
                  <p className="text-gray-500 mb-2">January 2021 - Present | Upwork (Remote)</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Collaborate with clients to understand data analysis needs, ensuring clear communication throughout projects.</li>
                    <li>Collect, clean, and transform data from various sources, facilitating insightful analysis.</li>
                    <li>Utilize statistical techniques and visualization tools (Excel, Python, Tableau) to uncover valuable insights.</li>
                    <li>Generate detailed reports and visualizations, helping clients make informed decisions.</li>
                  </ul>
                </div>
              </div>

              {/* Software Developer Intern Job */}
              <div className="flex flex-col items-center mb-8 relative nth-child:even:flex-row-reverse">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-blue-600 bg-white shadow-lg z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <img
                    src="path/to/alx-logo.png"
                    alt="ALX Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-blue-600">Software Developer Intern</h4>
                  <p className="text-gray-500 mb-2">2023 - Present | ALX Africa | Nairobi, Kenya</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Developed and maintained web applications using Python and Django, significantly improving user experience and functionality.</li>
                    <li>Collaborated with the design team to improve UI/UX based on user feedback and best practices.</li>
                    <li>Assisted in implementing REST APIs and optimized application performance for faster load times.</li>
                  </ul>
                </div>
              </div>

              {/* Associate Job */}
              <div className="flex flex-col items-center mb-8 relative nth-child:odd:flex-row-reverse">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-green-600 bg-white shadow-lg z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <img
                    src="path/to/sama-logo.png"
                    alt="Sama Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-green-600">Associate</h4>
                  <p className="text-gray-500 mb-2">August 2023 - August 2024 | Sama | Nairobi, Kenya</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Worked with cross-functional teams to implement and optimize data-driven solutions that enhance business performance.</li>
                    <li>Contributed to the data annotation and validation platform by ensuring high-quality data labeling for complex computer vision, traditional, and Gen AI models.</li>
                    <li>Assisted in the development of robust validation processes to maintain data integrity and accuracy, enabling machine learning models to perform effectively.</li>
                  </ul>
                </div>
              </div>

              {/* I.T Intern Job */}
              <div className="flex flex-col items-center mb-8 relative nth-child:even:flex-row-reverse">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-yellow-600 bg-white shadow-lg z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <img
                    src="path/to/nouveta-logo.png"
                    alt="Nouveta Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-yellow-600">I.T Intern</h4>
                  <p className="text-gray-500 mb-2">January 2021 - May 2021 | Nouveta Limited | Nairobi, Kenya</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Enhanced efficiency of ERP and CRM systems by streamlining billing processes, ensuring timely financial transactions.</li>
                    <li>Improved data integrity through systematic data tabulation and reporting.</li>
                  </ul>
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
