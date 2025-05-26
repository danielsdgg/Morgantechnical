import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ScrollButton from './ScrollButton';
import { motion } from 'framer-motion';
import logo from '../assets/class1.jpg';

const Courses: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    courses: false,
    highlights: false,
  });

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

    const sections = [
      document.querySelector('#intro-section'),
      document.querySelector('#courses-section'),
      document.querySelector('#highlights-section'),
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const timer = setTimeout(() => {
      setVisibleSections({ intro: true, courses: true, highlights: true });
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
        <title>Tech Courses at Morgan Technical Training | Software Engineering, Cybersecurity, Data Science</title>
        <meta
          name="description"
          content="Discover top tech courses at Morgan Technical Training in Kikuyu, Kenya. Learn Software Engineering, Cybersecurity, and Data Science remotely to launch your tech career."
        />
        <meta
          name="keywords"
          content="Morgan Technical Training courses, tech courses Kikuyu, software engineering course, cybersecurity course, data science course, remote tech training"
        />
        <link rel="canonical" href="https://morgantechnicaltraining.com/courses" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            'name': 'Morgan Technical Training',
            'url': 'https://morgantechnicaltraining.com',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Kikuyu Town, opposite Cleanshelf',
              'addressLocality': 'Kikuyu',
              'addressRegion': 'Kiambu County',
              'postalCode': '00902',
              'addressCountry': 'KE',
            },
            'telephone': '+254726152560',
            'email': 'morgantechnical72@gmail.com',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Tech Courses',
              'itemListElement': [
                {
                  '@type': 'Course',
                  'name': 'Software Engineering',
                  'description': 'A 6-month remote bootcamp teaching HTML, CSS, JavaScript, React, Node.js, Python, Flask, and SQLite.',
                  'url': 'https://morgantechnicaltraining.com/software',
                },
                {
                  '@type': 'Course',
                  'name': 'Cybersecurity',
                  'description': 'A 21-22 week remote course covering security measures, threat monitoring, and incident response.',
                  'url': 'https://morgantechnicaltraining.com/cybersecurity',
                },
                {
                  '@type': 'Course',
                  'name': 'Data Science',
                  'description': 'A 5-month remote program teaching Python, R, SQL, and predictive modeling.',
                  'url': 'https://morgantechnicaltraining.com/datascience',
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <NavBar />

      {/* Section 1: Intro to Courses */}
      <section
        id="intro-section"
        className={`mt-16 sm:mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 py-16 sm:py-20 transition-all duration-1000 ease-out ${
          visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              className="flex flex-col justify-center bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200/20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-4">
                Master Tech Skills
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 font-inter leading-relaxed mb-6">
                At Morgan Technical Training, our industry-aligned courses in Software Engineering, Cybersecurity, and Data Science empower you with hands-on skills to thrive in the tech world. Learn from expert instructors and build a future-ready career.
              </p>
              <Link
                to="/courses#courses-section"
                className="inline-block text-orange-500 font-inter font-semibold hover:text-orange-600 transition-colors duration-300"
                aria-label="Explore tech courses"
              >
                Explore Our Programs
              </Link>
            </motion.div>
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl border border-gray-200/20"
                src={logo}
                alt="Tech Courses at Morgan Technical Training"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x500?text=Classroom+Image')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: List of Courses */}
      <section
        id="courses-section"
        className={`bg-gray-50 py-16 sm:py-20 transition-all duration-1000 ease-out ${
          visibleSections.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12 text-center">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOidFsuemGaWGxr16QKfvzI52EFQeFTrN4Q&s"
                alt="Software Engineering Course at Morgan Technical Training"
                className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
              />
              <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-3">
                Software Engineering
              </h3>
              <p className="text-gray-700 font-inter text-sm sm:text-base mb-4">
                <span className="font-medium text-green-600">Available Now</span> - Master full-stack development in this 6-month program. Learn HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Python, Flask, and SQLite. Build real-world projects and deploy scalable applications.
              </p>
              <Link
                to="/software"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-inter font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
                aria-label="Learn more about Software Engineering course"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://www.technologysolutions.net/wp-content/uploads/2023/09/pros-and-cons-scaled-2560x1280.jpeg"
                alt="Cybersecurity Course at Morgan Technical Training"
                className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
              />
              <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-3">
                Cybersecurity
              </h3>
              <p className="text-gray-700 font-inter text-sm sm:text-base mb-4">
                <span className="font-medium text-yellow-600">Coming July 2025</span> - Learn to protect systems and data from cyber threats. This 21-22 week course covers security measures, threat monitoring, and incident response. Join the waitlist to stay updated.
              </p>
              <Link
                to="/cybersecurity"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-inter font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
                aria-label="Join waitlist for Cybersecurity course"
              >
                Join Waitlist
              </Link>
            </motion.div>
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://wallpapers.com/images/featured/data-science-xe1pmo7wm4jcokpd.jpg"
                alt="Data Science Course at Morgan Technical Training"
                className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
              />
              <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-3">
                Data Science
              </h3>
              <p className="text-gray-700 font-inter text-sm sm:text-base mb-4">
                <span className="font-medium text-yellow-600">Coming Q2 2026</span> - Analyze and visualize data to drive decisions. This 5-month program teaches Python, R, SQL, and predictive modeling. Build a portfolio of data-driven projects.
              </p>
              <Link
                to="/datascience"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-inter font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
                aria-label="Join waitlist for Data Science course"
              >
                Join Waitlist
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Learning Experience Highlights */}
      <section
        id="highlights-section"
        className={`bg-gradient-to-r from-indigo-50 to-purple-50 py-16 sm:py-20 transition-all duration-1000 ease-out ${
          visibleSections.highlights ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Learn with Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold font-inter text-indigo-900 mb-3 text-center">
                Hands-on Projects
              </h3>
              <p className="text-gray-700 font-inter text-sm sm:text-base text-center">
                Build real-world applications and portfolios through practical, industry-relevant projects guided by expert instructors.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold font-inter text-indigo-900 mb-3 text-center">
                Expert Instructors
              </h3>
              <p className="text-gray-700 font-inter text-sm sm:text-base text-center">
                Learn from industry professionals with years of experience, dedicated to your success in tech.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-3 text-center">
                Flexible Learning
              </h3>
              <p className="text-gray-700 font-inter text-sm sm:text-base text-center">
                Study remotely at your own pace with our flexible online platform, designed for busy learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollButton />
      <Footer />
    </>
  );
};

export default Courses;