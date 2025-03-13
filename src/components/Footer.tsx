import React from 'react';
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
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="md:col-span-2 flex flex-col animate-fade-in-up">
            <h1 className="text-3xl font-extrabold text-indigo-300 mb-4 tracking-tight">
              Morgan Technical Training
            </h1>
            <p className="text-gray-200 text-base leading-relaxed max-w-md">
              A leading tech bootcamp in Nairobi, Kenya, dedicated to training in-demand skills and preparing students for success in the workplace.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-xl font-semibold text-indigo-400 mb-4">Contact Us</h2>
            <ul className="text-gray-200 space-y-3 text-sm">
              <li>
                <span className="font-bold uppercase">Email : </span>
                <a
                  href="mailto:contact@morgantechnical72@gmail.com"
                  className="hover:text-indigo-300 transition-colors duration-300 underline"
                >
                  morgantechnical72@gmail.com
                </a>
              </li>
              <li>
                <span className="font-bold uppercase">Phone/WhatsApp : </span>
                <a
                  href="tel:+254702106527"
                  className="hover:text-indigo-300 transition-colors duration-300 underline"
                >
                  +254 707 319 080
                </a>
              </li>
              <li>
                <span className="font-bold uppercase">Location : </span>
                <span className="hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                  Kikuyu Town, May House: 1st Floor, Room 1c
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start animate-fade-in-up delay-200">
            <h2 className="text-xl font-semibold text-indigo-400 mb-4">Follow Us</h2>
            <ul className="flex space-x-6">
              {[
                // { icon: FaFacebookF, href: 'https://www.facebook.com' },
                { icon: XIcon, href: 'https://x.com/TechnicalM16539' }, 
                { icon: FaInstagram, href: 'https://www.instagram.com/morgan_technical_training?igsh=MWdwZ3Ayems0bmx1Mg==' },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-indigo-300 hover:scale-110 transition-all duration-300 transform"
                  >
                    <social.icon size={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold text-indigo-400 mb-4 text-center md:text-left">Our Location</h2>
          <div className="w-full max-w-2xl mx-auto md:mx-0 rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.838551624463!2d36.65927901078921!3d-1.2463781358192494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f5d9e7b1a9b%3A0x6e8f5f5e9e7b1a9b!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2ske!4v1728991489342!5m2!1sen!2ske"
              title="Morgan Technical Training Location"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Morgan Technical Training. All rights reserved.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}
      </style>
    </footer>
  );
};

export default Footer;