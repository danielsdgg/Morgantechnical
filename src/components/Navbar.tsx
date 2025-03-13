import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/morgan_ai.png'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeNestedSubMenu, setActiveNestedSubMenu] = useState<string | null>(null); // For nested dropdowns in mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubMenu(null); // Close any open submenus when toggling the main menu
    setActiveNestedSubMenu(null); // Close nested submenus as well
  };

  const toggleSubMenu = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
    setActiveNestedSubMenu(null); // Close nested submenus when toggling a main submenu
  };

  const toggleNestedSubMenu = (menu: string) => {
    setActiveNestedSubMenu(activeNestedSubMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-800 opacity-100 shadow-md fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer animate-fade-in-up">
          <img src={logo} alt="Logo" className="h-12 w-[40px]" />
          <h1 className='font-extrabold text-white ml-2 tracking-tight '>Morgan Technical Training</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Menu links for desktop */}
        <ul className="hidden lg:flex lg:items-center space-x-4">
          {/* Home */}
          <li>
            <Link to={'/'}>
              <p className="py-2 px-4 text-white hover:text-orange-400">Home</p>
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative group">
            <p className="py-2 px-4 text-white hover:text-orange-400 flex items-center">
              About
            </p>
            {/* Dropdown Menu */}
            <ul className="absolute w-[200px] left-0 top-full mt-0 hidden group-hover:block bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-lg border border-gray-200">
              <li>
                <Link to={'/story'}>
                  <p className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-indigo-600 transition-all duration-200 ease-in-out rounded-t-lg">
                    Our Story
                  </p>
                </Link>
              </li>
              <li>
                <Link to={'/team'}>
                  <p className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-indigo-600 transition-all duration-200 ease-in-out rounded-b-lg">
                    Our Team
                  </p>
                </Link>
              </li>
            </ul>
          </li>

          {/* Blogs */}
          <li>
            <Link to={'/blogs'}>
              <p className="py-2 px-4 text-white hover:text-orange-400">Blogs</p>
            </Link>
          </li>

          {/* Programs Dropdown */}
          <li className="relative group">
            <p className="py-2 px-4 text-white hover:text-orange-400 flex items-center">
              Programs <AiOutlineDown className="ml-1" />
            </p>
            {/* Dropdown Menu */}
            <ul className="absolute w-[250px] left-0 top-full mt-0 hidden group-hover:block bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-lg border border-gray-200">
              {/* Available Courses */}
              <li>
                <p className="block px-4 py-3 text-gray-800 font-semibold border-b border-gray-200 flex items-center justify-between">
                  Available Courses
                </p>
                <ul className="pl-4">
                  <li>
                    <Link to={'/software'}>
                      <p className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 ease-in-out rounded">
                        Software Engineering
                      </p>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={'/backend'}>
                      <p className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 ease-in-out rounded">
                        Backend
                      </p>
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* Upcoming Courses */}
              <li>
                <p className="block px-4 py-3 text-gray-800 font-semibold border-b border-gray-200 flex items-center justify-between">
                  Upcoming Courses
                </p>
                <ul className="pl-4">
                  <li>
                    <Link to={'/'}>
                      <p className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 ease-in-out rounded">
                        Data Science
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <p className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 ease-in-out rounded">
                        Cyber Security
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link to={'/contact'}>
              <p className="py-2 px-4 text-white hover:text-orange-400">Contact</p>
            </Link>
          </li>
          <Link to={'/portal'}>
            <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Portal
            </button>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu Sidebar */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 lg:hidden`}
      >
        <div className="p-4">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 w-[60px]" />
          <p className='py-2 font-bold text-yellow-200'>Morgan Technical Training</p>
        </div>
          <ul>
            {/* Home */}
            <li>
              <Link to={'/'}>
                <p className="block py-2 px-4 text-white hover:text-orange-400" onClick={toggleMenu}>
                  Home
                </p>
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="py-2 px-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu('about')}
              >
                <span className="text-white">About</span>
                {activeSubMenu === 'about' ? <AiOutlineUp /> : <AiOutlineDown />}
              </div>
              {activeSubMenu === 'about' && (
                <ul className="mt-2 ml-4">
                  <li>
                    <Link to={'/story'}>
                      <p className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Our Story</p>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={'/team'}>
                      <p className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Our Team</p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Blogs */}
            <li>
              <Link to={'/blogs'}>
                <p className="py-2 px-4 text-white hover:text-orange-400">Blogs</p>
              </Link>
            </li>

            {/* Programs Dropdown */}
            <li className="py-2 px-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu('programs')}
              >
                <span className="text-white">Programs</span>
                {activeSubMenu === 'programs' ? <AiOutlineUp /> : <AiOutlineDown />}
              </div>
              {activeSubMenu === 'programs' && (
                <ul className="mt-2 ml-4">
                  {/* Available Courses */}
                  <li>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleNestedSubMenu('availableCourses')}
                    >
                      <span className="text-gray-300">Available Courses</span>
                      {activeNestedSubMenu === 'availableCourses' ? <AiOutlineUp /> : <AiOutlineDown />}
                    </div>
                    {activeNestedSubMenu === 'availableCourses' && (
                      <ul className="mt-2 ml-4">
                        <li>
                          <Link to={'/software'}>
                            <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">Software Engineering</p>
                          </Link>
                        </li>
                        <hr />
                        {/* <li>
                          <Link to={'/backend'}>
                            <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">Backend</p>
                          </Link>
                        </li> */}
                      </ul>
                    )}
                  </li>
                  <hr />
                  {/* Upcoming Courses */}
                  <li>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleNestedSubMenu('upcomingCourses')}
                    >
                      <span className="text-gray-300">Upcoming Courses</span>
                      {activeNestedSubMenu === 'upcomingCourses' ? <AiOutlineUp /> : <AiOutlineDown />}
                    </div>
                    {activeNestedSubMenu === 'upcomingCourses' && (
                      <ul className="mt-2 ml-4">
                        <li>
                          <Link to={'/'}>
                            <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">Data Science</p>
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link to={'/'}>
                            <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">Cyber Security</p>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link to={'/contact'}>
                <p className="block py-2 px-4 text-white hover:text-orange-400" onClick={toggleMenu}>
                  Contact
                </p>
              </Link>
            </li>
            {/* Mobile Portal Button */}
            <li>
              <Link to={'/portal'}>
                <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                  Portal
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;