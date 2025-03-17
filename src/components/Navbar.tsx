import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
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
    <nav className="bg-red-900 shadow-lg fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer animate-fade-in-down">
        <NavLink to="/"><img src={logo} alt="Logo" className="h-12 w-auto" /></NavLink>
          <NavLink to="/">
            <h1 className="font-extrabold text-white ml-2 text-xl tracking-tight">Morgan Technical Training</h1>
          </NavLink>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none transition-transform duration-200 hover:scale-110">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Menu links for desktop */}
        <ul className="hidden lg:flex lg:items-center space-x-6">
          <li>
            <Link to="/" className="py-2 px-4 text-white hover:text-orange-400 transition-colors duration-200">Home</Link>
          </li>
          <li className="relative group">
            <p className="py-2 px-4 text-white hover:text-orange-400 flex items-center cursor-pointer">About</p>
            <ul className="absolute w-[200px] left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg border border-gray-200 transform origin-top animate-dropdown">
              <li>
                <Link to="/story" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-orange-600 transition-all duration-200">Our Story</Link>
              </li>
              <li>
                <Link to="/team" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-orange-600 transition-all duration-200">Our Team</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blogs" className="py-2 px-4 text-white hover:text-orange-400 transition-colors duration-200">Blogs</Link>
          </li>
          <li className="relative group">
            <p className="py-2 px-4 text-white hover:text-orange-400 flex items-center cursor-pointer">
              Programs <AiOutlineDown className="ml-1" />
            </p>
            <ul className="absolute w-[250px] left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg border border-gray-200 transform origin-top animate-dropdown">
              <li>
                <p className="block px-4 py-3 text-gray-800 font-semibold border-b border-gray-200">Available Courses</p>
                <ul className="pl-4">
                  <li>
                    <Link to="/software" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200">Software Engineering</Link>
                  </li>
                </ul>
              </li>
              <li>
                <p className="block px-4 py-3 text-gray-800 font-semibold border-b border-gray-200">Upcoming Courses</p>
                <ul className="pl-4">
                  <li>
                    <Link to="/datascience" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200">Data Science</Link>
                  </li>
                  <li>
                    <Link to="/cyber" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200">Cyber Security</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="py-2 px-4 text-white hover:text-orange-400 transition-colors duration-200">Contact</Link>
          </li>
          <li>
            <Link to="/portal">
              <button className="py-2 px-6 bg-orange-600 text-white rounded-full hover:bg-white hover:text-orange-600 cursor-pointer transition-all duration-200 hover:scale-105">Portal</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-10 lg:hidden animate-fade-in"
            onClick={toggleMenu}
          ></div>

          {/* Mobile Dropdown */}
          <div
            className="fixed top-0 left-0 w-full bg-red-900 text-white shadow-2xl z-20 lg:hidden transform transition-all duration-500 ease-in-out animate-slide-down"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center">
              <NavLink to="/"><img src={logo} alt="Logo" className="h-10 w-auto" /> </NavLink>
                <NavLink to="/" onClick={toggleMenu}>
                  <p className="font-bold text-xl text-white ml-2">Morgan Technical Training</p>
                </NavLink>
              </div>
              <button onClick={toggleMenu} className="text-2xl text-white hover:text-orange-400 transition-colors duration-200">
                <AiOutlineClose />
              </button>
            </div>
            <ul className="p-4 space-y-2">
              <li>
                <Link to="/" onClick={toggleMenu} className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-orange-400 rounded-lg transition-all duration-200">Home</Link>
              </li>
              <li>
                <div
                  className="flex justify-between items-center py-3 px-4 cursor-pointer hover:bg-orange-600 rounded-lg transition-all duration-200"
                  onClick={() => toggleSubMenu('about')}
                >
                  <span className="text-white">About</span>
                  {activeSubMenu === 'about' ? <AiOutlineUp className="text-orange-400" /> : <AiOutlineDown className="text-orange-400" />}
                </div>
                {activeSubMenu === 'about' && (
                  <ul className="ml-4 mt-2 space-y-2 animate-fade-in hover:bg-white hover:text-orange-600">
                    <li>
                      <Link to="/story" onClick={toggleMenu} className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-orange-400 rounded-lg transition-all duration-200">Our Story</Link>
                    </li>
                    <li>
                      <Link to="/team" onClick={toggleMenu} className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-orange-400 rounded-lg transition-all duration-200">Our Team</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/blogs" onClick={toggleMenu} className="block py-3 px-4 text-white hover:bg-orange-600 hover:text-orange-400 rounded-lg transition-all duration-200">Blogs</Link>
              </li>
              <li>
                <div
                  className="flex justify-between items-center py-3 px-4 cursor-pointer bg-orange-600 rounded-lg transition-all duration-200"
                  onClick={() => toggleSubMenu('programs')}
                >
                  <span className="text-white">Programs</span>
                  {activeSubMenu === 'programs' ? <AiOutlineUp className="text-orange-400" /> : <AiOutlineDown className="text-orange-400" />}
                </div>
                {activeSubMenu === 'programs' && (
                  <ul className="ml-4 mt-2 space-y-2 animate-fade-in">
                    <li>
                      <div
                        className="flex justify-between items-center py-2 px-4 cursor-pointer hover:bg-gray-600 rounded-lg transition-all duration-200"
                        onClick={() => toggleNestedSubMenu('availableCourses')}
                      >
                        <span className="text-gray-300">Available Courses</span>
                        {activeNestedSubMenu === 'availableCourses' ? <AiOutlineUp className="text-orange-400" /> : <AiOutlineDown className="text-orange-400" />}
                      </div>
                      {activeNestedSubMenu === 'availableCourses' && (
                        <ul className="ml-4 mt-2 space-y-2 animate-fade-in">
                          <li>
                            <Link to="/software" onClick={toggleMenu} className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-orange-400 rounded-lg transition-all duration-200">Software Engineering</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <div
                        className="flex justify-between items-center py-2 px-4 cursor-pointer hover:bg-gray-600 rounded-lg transition-all duration-200"
                        onClick={() => toggleNestedSubMenu('upcomingCourses')}
                      >
                        <span className="text-gray-300">Upcoming Courses</span>
                        {activeNestedSubMenu === 'upcomingCourses' ? <AiOutlineUp className="text-orange-400" /> : <AiOutlineDown className="text-orange-400" />}
                      </div>
                      {activeNestedSubMenu === 'upcomingCourses' && (
                        <ul className="ml-4 mt-2 space-y-2 animate-fade-in">
                          <li>
                            <Link to="/datascience" onClick={toggleMenu} className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-orange-400 rounded-lg transition-all duration-200">Data Science</Link>
                          </li>
                          <li>
                            <Link to="/cyber" onClick={toggleMenu} className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-orange-400 rounded-lg transition-all duration-200">Cyber Security</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu} className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-orange-400 rounded-lg transition-all duration-200">Contact</Link>
              </li>
              <li>
                <Link to="/portal" onClick={toggleMenu}>
                  <button className="w-full py-3 px-4 mt-4 bg-orange-600 text-white rounded-full hover:bg-white text-orange-600 cursor-pointer transition-all duration-300 hover:scale-105">Portal</button>
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