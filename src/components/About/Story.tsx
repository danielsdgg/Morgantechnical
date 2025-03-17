import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector('#mission-vision-section');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is within the viewport
      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Optional: hide when scrolling back up
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call handleScroll to check visibility on mount
    handleScroll();

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      {/* 1 */}
      <section id="mission-vision-section" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Section */}
          <div
            className={`flex flex-col items-center text-center md:text-left transition-transform duration-1000 ease-in-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`text-4xl text-blue-500 mb-4 transition-opacity duration-1000 ease-in-out delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Icon for Mission */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide quality affordable and reliable education and training for the modern job market
            </p>
          </div>

          {/* Vision Section */}
          <div
            className={`flex flex-col items-center text-center md:text-left transition-transform duration-1000 ease-in-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`text-4xl text-green-500 mb-4 transition-opacity duration-1000 ease-in-out delay-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Icon for Vision */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12 13h-9v7L3 14h6z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To become a global tech bootcamp, continuously adapting to emerging technologies and ensuring the highest standards of training to our students.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* 2 */}
    <section className="relative bg-gray-100 py-24">
        <div className="container mx-auto px-4">
            {/* Section with Image Background */}
            <div className="relative flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat h-auto min-h-[400px] sm:h-[500px] rounded-lg shadow-lg"
            style={{backgroundImage: `url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyb250JTIwZW5kfGVufDB8fDB8fHww')`}}>
                {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            {/* Text Content */}
            <div className="relative z-10 p-6 sm:p-8 text-white">
              <h2 className="text-3xl sm:text-4xl text-orange-600 font-bold mb-4 sm:mb-6">The Morgan Technical Journey</h2>
              <p className="text-base sm:text-lg mb-4">
                  At Morgan Technical Training, our story begins with a bold vision: to transform lives through the power of technology. Driven by a passion for innovation and learning, we set out to create a training institution that bridges the gap between ambition and opportunity, equipping individuals with the skills to thrive in today’s fast-evolving tech landscape.
              </p>
              <p className="text-base sm:text-lg mb-4">
                  Founded by industry experts who understand the pulse of technology, Morgan Technical Training was born out of the belief that education is the foundation of success. From humble beginnings, we have grown into a hub of excellence, offering courses designed to inspire creativity, instill confidence, and unlock potential.
              </p>
              <p className="text-base sm:text-lg mb-4">
                  At the heart of Morgan Technical Training is a relentless commitment to our students. We don’t just teach technology; we ignite curiosity, nurture innovation, and prepare our learners to tackle real-world challenges. Whether it’s mastering coding, exploring cybersecurity, or diving into data science, we empower you to turn aspirations into achievements.
              </p>
              <p className="text-base sm:text-lg">
                  Join us at Morgan Technical Training, where your journey into the world of technology begins. Together, let’s build a future powered by knowledge, driven by skill, and defined by success.
              </p>
            </div>
            </div>
        </div>
      </section>
      {/* 3 */}
      <div className='w-full bg-gray-800 text-orange-600 py-24 px-2 text-center md:text-5xl sm:text-3xl text-3xl'>
        <p>Begin your story with us today</p>
        </div>
        <ScrollButton/>
      <Footer />
    </>
  );
};

export default Story;
