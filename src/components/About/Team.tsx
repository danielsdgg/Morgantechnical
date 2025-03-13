import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FaInstagram } from 'react-icons/fa';

// Custom X Icon SVG
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Team:React.FC = () => {
  const message = 'The best time to start is now';
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector('#team-section');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <section id="team-section" className="bg-gray-200 py-28">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Team Behind Morgan Technical Training</h2>
          <p className="text-lg md:text-xl text-gray-500">{message}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div
              className={`col-span-3 md:col-span-1 pt-9 transition-transform duration-1000 ease-in-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                <img
                  src="https://res.cloudinary.com/ddei3mzex/image/upload/v1729591303/1000138333_m8roto.jpg"
                  className="mx-auto w-48 h-48 rounded-full mb-6"
                  alt="Leonard Morgan"
                />
                <h3 className="text-xl font-semibold">Leonard Morgan</h3>
                <div className="mb-4">
                  <p className="text-gray-500">Head of M.T.T</p>
                </div>
                <p className="text-black">
                  Leonard, our co-founder, drives Morgan Technical Training with a passion for skill-building. With over fifteen years of experience, he’s crafted innovative curriculums that empower students with top-tier problem-solving and tech expertise.
                </p>
                <ul className="flex justify-center mt-6">
                  <li className="mx-2">
                    <a href="https://x.com/TechnicalM16539">
                      <XIcon />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="http://www.instagram.com">
                      <FaInstagram size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Team Member 2 */}
            <div
              className={`col-span-3 md:col-span-1 pt-9 transition-transform duration-1000 ease-in-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                <img
                  src="https://res.cloudinary.com/ddei3mzex/image/upload/v1728998699/IMG_5230_qib0qp.jpg"
                  className="mx-auto w-48 h-48 rounded-full mb-6"
                  alt="Nathan Nyongesa"
                />
                <h3 className="text-xl font-semibold">Nelson Nyongesa</h3>
                <div className="mb-4">
                  <p className="text-gray-600">Mentor</p>
                </div>
                <p className="text-black">
                  Nelson, one of our dedicated mentors, brings a deep passion for technology to Morgan Technical Training. He guides students with hands-on expertise, fostering innovation and mastery in cutting-edge tech skills.
                </p>
                <ul className="flex justify-center mt-6">
                  <li className="mx-2">
                    <a href="http://www.twitter.com">
                      <XIcon />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="http://www.instagram.com">
                      <FaInstagram size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Team Member 3 */}
            <div
              className={`col-span-3 md:col-span-1 pt-9 transition-transform duration-1000 ease-in-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                <img
                  src="https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg"
                  className="mx-auto w-48 h-48 rounded-full mb-6"
                  alt="Daniel Muiruri"
                />
                <h3 className="text-xl font-semibold">DANIEL MUIRURI</h3>
                <div className="mb-4">
                  <p className="text-gray-600">Lead Software Engineer</p>
                </div>
                <p className="text-black">
                  Daniel is our lead Software developer who specializes in creating software solutions for clients ranging from
                  individuals and small businesses all the way to large enterprise corporations.
                </p>
                <ul className="flex justify-center mt-6">
                  <li className="mx-2">
                    <a href="https://x.com/DanielMuir69423">
                      <XIcon />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="http://www.instagram.com">
                      <FaInstagram size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;