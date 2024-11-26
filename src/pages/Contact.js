import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

    // Log formData to check values before sending to EmailJS
    console.log('Form Data:', formData);

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
          console.log('EmailJS Success:', result);  // Log the result
          setStatus('Message sent successfully!');
          setLoading(false);  // Reset loading state
          // Clear the form after successful submission
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);  // Log the error
          setStatus('An error occurred. Please try again.');
          setLoading(false);  // Reset loading state
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"  // Ensure this matches the state
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"  // Ensure this matches the state
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"  // Ensure this matches the state
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          disabled={loading} // Disable the button if loading
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default Contact;
