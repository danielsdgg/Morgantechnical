import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import logo from '../assets/data.jpg';
import { Helmet } from 'react-helmet-async'; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    form: false,
  });

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = [document.querySelector('#hero-section'), document.querySelector('#form-section')];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Fallback: Ensure sections are visible after a delay
    const timer = setTimeout(() => {
      setVisibleSections({ hero: true, form: true });
    }, 1500);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    <Helmet>
  <title>Contact Morgan Technical Training - Kikuyu, Kenya</title>
  <meta
    name="description"
    content="Get in touch with Morgan Technical Training, a tech bootcamp in Kikuyu Town, opposite Cleanshelf, Kenya. Call +254 726 152 560 or email morgantechnical72@gmail.com to learn about our software engineering, cybersecurity, and data science courses."
  />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Morgan Technical Training",
        "description": "A technical training bootcamp offering courses in software engineering, cybersecurity, and data science.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kikuyu Town, opposite Cleanshelf",
          "addressLocality": "Kikuyu",
          "addressRegion": "Kiambu County",
          "postalCode": "00902",
          "addressCountry": "Kenya"
        },
        "telephone": "+254726152560",
        "email": "morgantechnical72@gmail.com",
        "url": "https://morgantechnicaltraining.com"
      }
    `}
  </script>
</Helmet>
    <Navbar />
      {/* Section 1: Hero */}
      <section
        id="hero-section"
        className={`bg-gradient-to-b from-indigo-900 to-purple-900 py-16 sm:py-20 text-white transition-all duration-1000 ease-out ${
          visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mt-6 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter text-orange-400 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connect with Your Tech Future
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-inter max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to start your journey or have questions? Contact Morgan Technical Training, and let’s shape your future in tech together.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Contact Form and Image */}
      <section
        id="form-section"
        className={`bg-gray-50 py-20 sm:py-24 transition-all duration-1000 ease-out ${
          visibleSections.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Image */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200/20">
                <img
                  className="w-full h-full object-cover"
                  src={logo}
                  alt="Morgan Technical Training Classroom"
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x500?text=Classroom+Image')}
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form
                onSubmit={sendEmail}
                className="w-full bg-white/90 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200/20"
              >
                <div className="pb-6 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold font-inter text-indigo-900 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 font-inter">
                    Fill out the form below or email{' '}
                    <a
                      href="mailto:morgantechnical72@gmail.com"
                      className="text-orange-500 hover:text-orange-600 underline transition-colors duration-300"
                    >
                      morgantechnical72@gmail.com
                    </a>
                    .
                  </p>
                </div>

                {/* Notification */}
                {notification && (
                  <motion.div
                    className={`mb-6 p-4 text-center rounded-lg ${
                      notification.includes('successfully')
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {notification}
                  </motion.div>
                )}

                <div className="mb-6">
                  <label className="block text-gray-700 font-inter font-medium mb-2">Name</label>
                  <input
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-inter font-medium mb-2">Email</label>
                  <input
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    type="email"
                    placeholder="...@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-inter font-medium mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-inter font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;