import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { Helmet } from 'react-helmet-async';

const Story: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState({
    missionVision: false,
    journey: false,
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
      document.querySelector('#mission-vision-section'),
      document.querySelector('#journey-section'),
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Fallback: Ensure sections are visible after a delay
    const timer = setTimeout(() => {
      setVisibleSections({ missionVision: true, journey: true });
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
        <title>About Morgan Technical Training | Kikuyu, Kenya</title>
        <meta
          name="description"
          content="Learn about Morgan Technical Training, a leading tech bootcamp in Kikuyu, Kenya, dedicated to empowering students with in-demand tech skills."
        />
        <meta name="keywords" content="Morgan Technical Training, tech bootcamp Kikuyu, about tech training Kenya" />
        <link rel="canonical" href="https://morgantechnicaltraining.com/about" />
      </Helmet>
      <NavBar />
      {/* Section 1: Mission & Vision (Retained) */}
      <section
        id="mission-vision-section"
        className="bg-white py-20 sm:py-24 transition-all duration-1000 ease-out"
      >
        <div className="container mt-4 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Mission */}
            <div
              className={`flex flex-col items-center text-center md:text-left transition-all duration-1000 ease-out ${
                visibleSections.missionVision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                className={`text-4xl text-indigo-600 mb-4 transition-opacity duration-1000 ease-out delay-300 ${
                  visibleSections.missionVision ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-inter text-orange-400 mb-4">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-inter">
                To provide quality, affordable, and reliable education and training for the modern job market.
              </p>
            </div>

            {/* Vision */}
            <div
              className={`flex flex-col items-center text-center md:text-left transition-all duration-1000 ease-out delay-300 ${
                visibleSections.missionVision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                className={`text-4xl text-indigo-600 mb-4 transition-opacity duration-1000 ease-out delay-600 ${
                  visibleSections.missionVision ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12 13h-9v7L3 14h6z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-inter text-orange-400 mb-4">
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-inter">
                To become a global tech bootcamp, continuously adapting to emerging technologies and ensuring the highest standards of training for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Morgan Technical Journey */}
      <section
        id="journey-section"
        className="py-20 sm:py-24 bg-gradient-to-r from-indigo-50 to-purple-50 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Image */}
            <div
              className={`w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ease-out ${
                visibleSections.journey ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyb250JTIwZW5kfGVufDB8fDB8fHww"
                alt="Morgan Technical Training Journey"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div
              className={`w-full lg:w-1/2 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl transition-all duration-1000 ease-out delay-200 ${
                visibleSections.journey ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 font-inter mb-4">
                Founded by an industry expert in Nairobi, Kenya, Morgan Technical Training was born from a passion to transform lives through technology. We bridge the gap between ambition and opportunity, equipping students with in-demand skills to thrive in the global tech landscape.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 font-inter mb-6">
                From humble beginnings, we’ve grown into a hub of excellence, fostering creativity, innovation, and real-world problem-solving. Our commitment is to empower every learner to turn aspirations into achievements, shaping a future powered by knowledge and skill.
              </p>
              <a
                href="/courses"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-inter text-lg font-semibold shadow-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
              >
                Join Our Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <ScrollButton />
      <Footer />
    </>
  );
};

export default Story;