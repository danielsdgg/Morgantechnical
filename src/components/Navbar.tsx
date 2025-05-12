import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUp,
} from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/morgan_ai.png';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeNestedSubMenu, setActiveNestedSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubMenu(null);
    setActiveNestedSubMenu(null);
  };

  const toggleSubMenu = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
    setActiveNestedSubMenu(null);
  };

  const toggleNestedSubMenu = (menu: string) => {
    setActiveNestedSubMenu(activeNestedSubMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 shadow-xl fixed w-full z-20 top-0 left-0">
    <style>
      {`
        .group:hover .group-hover\\:delay-300 {
          transition-delay: 300ms;
        }
        .group:not(:hover) .group-hover\\:delay-300 {
          transition-delay: 800ms;
        }
        .group {
          position: relative;
        }
        .group:before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 10px;
          z-index: 1;
        }
      `}
    </style>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <NavLink to="/">
            <img src={logo} alt="Morgan Technical Training logo" className="h-14 w-auto" />
          </NavLink>
          <NavLink to="/" className="ml-3">
            <h1 className="font-bold text-white text-2xl tracking-tight font-inter">
              Morgan Technical Training
            </h1>
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white hover:text-indigo-300 transition-colors duration-200"
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-white font-inter font-medium text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-inter font-medium text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="text-white font-inter font-medium text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
          <li className="relative group">
            <button
              className="flex items-center text-white font-inter font-medium text-lg hover:text-indigo-300 transition-colors duration-200"
              aria-expanded={!!activeSubMenu}
              aria-controls="programs-dropdown"
              aria-haspopup="true"
            >
              Programs <AiOutlineDown className="ml-2" />
            </button>
            <motion.div
              id="programs-dropdown"
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl hidden group-hover:block min-w-[320px] w-[360px] max-w-[90vw] mx-4 mt-2 border border-orange-400/20 shadow-inner opacity-0 group-hover:opacity-100 group-hover:delay-300 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              role="menu"
            >
              <div className="relative grid grid-cols-2 gap-6 px-5 py-5">
                {/* Vertical Gradient Divider */}
                <div className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 to-orange-600 bg-opacity-80 z-0"></div>

                {/* Available Courses */}
                <div>
                  <motion.h3
                    className="text-gray-800 font-inter font-semibold text-base mb-3 relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    Available Courses
                    <span className="absolute left-0 -bottom-1 w-10 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
                  </motion.h3>
                  <ul>
                    <motion.li
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <Link
                        to="/software"
                        className="block w-full px-5 py-3 text-gray-800 font-inter text-sm relative hover:bg-white/40 hover:backdrop-blur-md hover:text-orange-600 hover:scale-105 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 group"
                        aria-label="Navigate to Software Engineering course"
                        role="menuitem"
                      >
                        Software Engineering
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-200"></span>
                      </Link>
                    </motion.li>
                  </ul>
                </div>
                {/* Upcoming Courses */}
                <div>
                  <motion.h3
                    className="text-gray-800 font-inter font-semibold text-base mb-3 relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Upcoming Courses
                    <span className="absolute left-0 -bottom-1 w-10 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
                  </motion.h3>
                  <ul>
                    <motion.li
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <Link
                        to="/datascience"
                        className="block w-full px-5 py-3 text-gray-800 font-inter text-sm relative hover:bg-white/40 hover:backdrop-blur-md hover:text-orange-600 hover:scale-105 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 group"
                        aria-label="Navigate to Data Science course"
                        role="menuitem"
                      >
                        Data Science
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-200"></span>
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <Link
                        to="/cybersecurity"
                        className="block w-full px-5 py-3 text-gray-800 font-inter text-sm relative hover:bg-white/40 hover:backdrop-blur-md hover:text-orange-600 hover:scale-105 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 group"
                        aria-label="Navigate to Cyber Security course"
                        role="menuitem"
                      >
                        Cyber Security
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-200"></span>
                      </Link>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-inter font-medium text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Unchanged) */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-10 lg:hidden"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-0 left-0 w-4/5 max-w-sm bg-gradient-to-b from-indigo-900 to-purple-900 text-white z-20 lg:hidden p-6 h-full transform transition-transform duration-300 ease-in-out translate-x-0">
            {/* Top header with logo and close */}
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <NavLink to="/" className="flex items-center" onClick={toggleMenu}>
                <img src={logo} alt="Morgan Technical Training logo" className="h-12 w-auto" />
                <span className="font-bold text-xl ml-3 font-inter">Morgan Technical Training</span>
              </NavLink>
              <button onClick={toggleMenu} className="text-2xl text-white hover:text-indigo-300">
                <AiOutlineClose />
              </button>
            </div>

            {/* Links */}
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block py-3 px-4 font-inter text-lg hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className="block py-3 px-4 font-inter text-lg hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  onClick={toggleMenu}
                  className="block py-3 px-4 font-inter text-lg hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <button
                  onClick={() => toggleSubMenu('programs')}
                  className="flex w-full justify-between items-center py-3 px-4 font-inter text-lg hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <span>Programs</span>
                  {activeSubMenu === 'programs' ? <AiOutlineUp /> : <AiOutlineDown />}
                </button>
                {activeSubMenu === 'programs' && (
                  <ul className="ml-4 mt-3 space-y-2">
                    <li>
                      <button
                        onClick={() => toggleNestedSubMenu('available')}
                        className="flex w-full justify-between items-center py-3 px-4 font-inter text-base hover:bg-gray-800 rounded-lg transition-colors duration-200"
                      >
                        <span>Available Courses</span>
                        {activeNestedSubMenu === 'available' ? <AiOutlineUp /> : <AiOutlineDown />}
                      </button>
                      {activeNestedSubMenu === 'available' && (
                        <ul className="ml-4 mt-2">
                          <li>
                            <Link
                              to="/software"
                              onClick={toggleMenu}
                              className="block py-3 px-4 font-inter text-base hover:bg-indigo-700 rounded-lg transition-colors duration-200"
                            >
                              Software Engineering
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={() => toggleNestedSubMenu('upcoming')}
                        className="flex w-full justify-between items-center py-3 px-4 font-inter text-base hover:bg-gray-800 rounded-lg transition-colors duration-200"
                      >
                        <span>Upcoming Courses</span>
                        {activeNestedSubMenu === 'upcoming' ? <AiOutlineUp /> : <AiOutlineDown />}
                      </button>
                      {activeNestedSubMenu === 'upcoming' && (
                        <ul className="ml-4 mt-2">
                          <li>
                            <Link
                              to="/datascience"
                              onClick={toggleMenu}
                              className="block py-3 px-4 font-inter text-base hover:bg-indigo-700 rounded-lg transition-colors duration-200"
                            >
                              Data Science
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/cybersecurity"
                              onClick={toggleMenu}
                              className="block py-3 px-4 font-inter text-base hover:bg-indigo-700 rounded-lg transition-colors duration-200"
                            >
                              Cyber Security
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="block py-3 px-4 font-inter text-lg hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;