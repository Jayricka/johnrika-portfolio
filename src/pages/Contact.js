import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Importing React Icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;  // Prevent form submission if already loading

    // Validate the form fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields');
      return;
    }

    setLoading(true);  // Set loading to true

    // Sending the form data to EmailJS with the correct placeholders
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Your Portfolio Team',  // Add recipient's name if needed
          from_name: formData.name,  // From the inputted name
          from_email: formData.email,  // From the inputted email
          message: formData.message,  // From the inputted message
        },
        process.env.REACT_APP_EMAILJS_USER_ID  // Your user ID for EmailJS
      )
      .then(
        (result) => {
          console.log('EmailJS Success:', result);
          setStatus('Message sent successfully!');
          setLoading(false);
          // Clear the form after successful submission
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('An error occurred. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 max-w-screen-xl mx-auto">
        {/* Contact Information Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6 text-center lg:text-left">
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I’m always excited to connect with individuals who share a passion
            for innovation and collaboration. Whether it’s to discuss a project,
            ask questions, or explore new opportunities, I’m just a message away.
            Feel free to get in touch through any of the channels below. I look
            forward to hearing from you!
          </p>

          <div className="flex items-center space-x-4 hover:text-blue-500 transition-colors duration-300">
            <FaMapMarkerAlt className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium">Nairobi, Kenya</p>
          </div>

          <div className="flex items-center space-x-4 hover:text-blue-500 transition-colors duration-300">
            <FaEnvelope className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium">digistall.solutions@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4 hover:text-blue-500 transition-colors duration-300">
            <FaPhoneAlt className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium">0794-696-968</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {status && <p className="mt-4 text-center text-red-500">{status}</p>}
    </div>
  );
};

export default Contact;
