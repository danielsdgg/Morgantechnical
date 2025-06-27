import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const footer = document.querySelector('#footer-section');
    if (footer) {
      observer.observe(footer);
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
      clearTimeout(timer);
    };
  }, []);

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/courses' },
    { name: 'Software Engineering', to: '/software' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'Blog', to: '/blogs' },
  ];

  const courseLinks = [
    { name: 'Software Engineering', to: '/software' },
    { name: 'Cybersecurity', to: '/cybersecurity' },
    { name: 'Data Science', to: '/datascience' },
  ];

  return (
    <footer
      id="footer-section"
      className={`bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3
              className={`text-lg font-semibold font-inter text-orange-400 mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Morgan Technical Training
            </h3>
            <p
              className={`text-sm font-inter text-gray-200 mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              A leading tech bootcamp in Kikuyu, Kenya, dedicated to training in-demand skills in Software Engineering, Cybersecurity, and Data Science.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/TechnicalM16539"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Follow Morgan Technical Training on X"
              >
                <SiX className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/morgan_technical_training?igsh=MWdwZ3Ayems0bmx1Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Follow Morgan Technical Training on Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/morgan-technical-training"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Follow Morgan Technical Training on LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-semibold font-inter text-orange-400 mb-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className={`text-gray-200 hover:text-orange-300 font-inter text-sm transition-colors duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } delay-${(index + 3) * 100}`}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h3
              className={`text-lg font-semibold font-inter text-orange-400 mb-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Our Courses
            </h3>
            <ul className="space-y-2">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className={`text-gray-200 hover:text-orange-300 font-inter text-sm transition-colors duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } delay-${(index + 5) * 100}`}
                    aria-label={`Explore ${link.name}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3
              className={`text-lg font-semibold font-inter text-orange-400 mb-4 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li
                className={`flex items-center text-sm font-inter text-gray-200 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <FaEnvelope className="mr-2 text-orange-300" />
                <a
                  href="mailto:morgantechnical72@gmail.com"
                  className="hover:text-orange-300 transition-colors duration-300"
                  aria-label="Email Morgan Technical Training"
                >
                  morgantechnical72@gmail.com
                </a>
              </li>
              <li
                className={`flex items-center text-sm font-inter text-gray-200 transition-all duration-700 delay-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <FaPhone className="mr-2 text-orange-300" />
                <a
                  href="tel:+254702106527"
                  className="hover:text-orange-300 transition-colors duration-300"
                  aria-label="Call Morgan Technical Training"
                >
                  +254 702 106 527 /+254 707 319 080
                </a>
              </li>
              <li
                className={`flex items-start text-sm font-inter text-gray-200 transition-all duration-700 delay-900 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <FaMapMarkerAlt className="mr-2 text-orange-300 mt-1" />
                <span>Kikuyu Town, opposite Cleanshelf, Kiambu County, Kenya</span>
              </li>
            </ul>            
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-12 pt-8 border-t border-gray-700/50 text-center transition-all duration-700 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="text-sm font-inter text-gray-200">
            © {new Date().getFullYear()} Morgan Technical Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;