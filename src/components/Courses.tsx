import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ScrollButton from './ScrollButton';
import logo from '../assets/class1.jpg';

const Courses: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('next-step-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // To re-trigger animation when scrolling back up
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <NavBar />
      {/* Intro to courses */}
      <div id="next-step-section" className="w-full bg-gray-300 py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 mt-8 md:grid-cols-2 gap-8">
          {/* Text Content with Animation */}
          <div
            className={`flex flex-col justify-center text-black h-full transition-transform duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-60 opacity-0'
            }`}
          >
            <h2 className="font-semibold text-orange-700 py-2 mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Take the next step:
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              At Morgan Technical, we offer a diverse range of courses designed to
              equip students with the skills and knowledge needed for success in
              today's competitive world. Our programs span various disciplines,
              including Business, Computer Science, Engineering, and the Arts,
              each taught by experienced faculty. With a focus on both theoretical
              understanding and practical application, our courses are tailored to
              meet industry demands. Join us and take the first step toward a
              fulfilling career through our comprehensive and innovative
              curriculum.
            </p>
          </div>

          {/* Image with Animation */}
          <img
            className={`w-full h-full object-cover rounded-3xl my-4 transition-transform duration-1000 ease-out delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-60 opacity-0'
            }`}
            src={logo}
            alt="Classroom"
          />
        </div>
      </div>

      {/* List of courses */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-2xl font-bold text-orange-700 mb-4 underline">
            Our Programs:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOidFsuemGaWGxr16QKfvzI52EFQeFTrN4Q&s"
                alt="Software Engineering Icon"
                className="mx-auto mb-4 h-16 w-16 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Software Engineering</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <b>This course is available</b> - Software engineers design, develop, and maintain robust applications, mastering both frontend and backend technologies. 
                Our course trains you in HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Python, Flask, and SQLite to build full-stack solutions. 
                You'll learn to collaborate on projects, optimize performance, and deploy scalable systems across platforms.
              </p>
              <Link to="/software">
                <p className="text-indigo-600 hover:text-indigo-800 hover:underline mt-4 block font-medium transition-colors duration-300">
                  Learn More
                </p>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://www.technologysolutions.net/wp-content/uploads/2023/09/pros-and-cons-scaled-2560x1280.jpeg"
                alt="Cyber Security Icon"
                className="mx-auto mb-4 h-16 w-16 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Cyber Security</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <b>This is an upcoming course in our curriculum</b> - Cybersecurity protects systems, networks, and data from cyber threats like attacks and breaches. It involves implementing security measures, monitoring for suspicious activity, and responding to incidents to ensure data integrity and confidentiality.
              </p>
              <Link to="/cybersecurity">
                <p className="text-indigo-600 hover:text-indigo-800 hover:underline mt-4 block font-medium transition-colors duration-300">
                  Learn More
                </p>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://wallpapers.com/images/featured/data-science-xe1pmo7wm4jcokpd.jpg"
                alt="Data Science Icon"
                className="mx-auto mb-4 h-16 w-16 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Data Science</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <b>This is an upcoming course in our curriculum</b> - A data scientist is responsible for analyzing and interpreting complex data to help organizations make data-driven decisions. We train on tools like Python, R, and SQL to analyze large datasets, build predictive models, and visualize data insights. Their role includes collaborating with stakeholders, identifying trends, and ensuring the accuracy and integrity of data-driven solutions.
              </p>
              <Link to="/datascience">
                <p className="text-indigo-600 hover:text-indigo-800 hover:underline mt-4 block font-medium transition-colors duration-300">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollButton />
      <Footer />
    </>
  );
};

export default Courses;