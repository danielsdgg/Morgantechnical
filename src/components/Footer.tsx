import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Custom X Icon SVG
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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

    // Fallback: Ensure footer is visible after a delay
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

  return (
    <footer
      id="footer-section"
      className={`bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12 sm:py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <h1
              className={`text-3xl sm:text-4xl font-bold font-inter text-orange-400 mb-4 tracking-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Morgan Technical Training
            </h1>
            <p
              className={`text-gray-200 text-sm sm:text-base font-inter leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              A leading tech bootcamp in Nairobi, Kenya, dedicated to training in-demand skills and preparing students for success in the workplace.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h2
              className={`text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Contact Us
            </h2>
            <ul
              className={`text-gray-200 text-sm sm:text-base font-inter space-y-3 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <li className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:morgantechnical72@gmail.com"
                  className="hover:text-orange-300 transition-colors duration-300 underline"
                >
                  morgantechnical72@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Phone/WhatsApp:</span>
                <a
                  href="tel:+254726152560"
                  className="hover:text-orange-300 transition-colors duration-300 underline"
                >
                  +254 726 152 560
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <span className="hover:text-orange-300 transition-colors duration-300 cursor-pointer">
                  Kikuyu Town, May House: 1st Floor, Suite 1c
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col">
            <h2
              className={`text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Follow Us
            </h2>
            <ul
              className={`flex space-x-6 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {[
                { icon: XIcon, href: 'https://x.com/TechnicalM16539' },
                {
                  icon: FaInstagram,
                  href: 'https://www.instagram.com/morgan_technical_training?igsh=MWdwZ3Ayems0bmx1Mg==',
                },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label={`Follow us on ${social.href.includes('instagram') ? 'Instagram' : social.href.includes('linkedin') ? 'LinkedIn' : 'X'}`}
                  >
                    <social.icon size={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="flex flex-col">
            <h2
              className={`text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-4 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Our Location
            </h2>
            <div
              className={`w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200/20 hover:scale-[1.03] transition-transform duration-300 bg-white/10 backdrop-blur-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } delay-700`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.885041735974!2d36.66917767441952!3d-1.2454239987378493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f04e8b6f5e8d9%3A0x7e8e8d8e8f5e8d9!2sKikuyu%20Town%2C%20May%20House!5e0!3m2!1sen!2ske!4v1731890123456!5m2!1sen!2ske"
                title="Morgan Technical Training Location - Kikuyu Town, May House"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-10 sm:mt-12 border-t border-gray-700/50 pt-6 text-center transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="text-gray-300 text-sm sm:text-base font-inter">
            © {new Date().getFullYear()} Morgan Technical Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;