import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formcarry.com/s/-49z_wo5br3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setNotification('Your message was received successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } catch (error) {
      console.error('Formcarry error:', error);
      setNotification('Failed to send message. Please try again later.');
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-gray-100 py-28 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[800px] h-[500px] rounded-3xl shadow-lg"
              src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2023/07/12/admike.png"
              alt="imagery"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={sendEmail} className="w-full bg-white p-8 rounded-lg shadow-lg">
              <div className="pb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  To contact us, please fill out the form below or send an email to{' '}
                  <a href="mailto:morgantechnical72@gmail.com" className="text-indigo-500">
                    morgantechnical72@gmail.com
                  </a>
                  .
                </p>
              </div>

              {/* Notification Section */}
              {notification && (
                <div className="mb-4 p-4 text-center bg-green-100 text-green-800 rounded-lg">
                  {notification}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-gray-700">Name</label>
                <input
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Email</label>
                <input
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  type="email"
                  placeholder="...@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-orange-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-300 hover:text-orange-600 cursor-pointer transition duration-300 text-lg">
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;