import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import ScrollButton from './ScrollButton';
import logo from '../assets/stu.jpg';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: true, // Start with hero visible
    courses: false,
    testimonials: false,
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
      { threshold: 0.1, rootMargin: '50px' } // Adjusted for smoother triggering
    );

    const sections = [
      document.querySelector('#hero-section'),
      document.querySelector('#top-courses-section'),
      document.querySelector('#testimonials-section'),
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Fallback: Ensure sections become visible after a delay
    const timer = setTimeout(() => {
      setVisibleSections((prev) => ({
        ...prev,
        courses: true,
        testimonials: true,
      }));
    }, 2000);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      image: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1728998699/IMG_5230_qib0qp.jpg',
      name: 'Nathan Nyongesa',
      title: 'Mentor',
      testimonial: 'Working at Morgan Technical has been significantly more effective in upscaling my skills by training newbie techies.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCuCOisgxyOypyBi-hRYYV2Onv7KVI6QTVA&s',
      name: 'Adrian',
      title: 'Student',
      testimonial: 'I always wanted to be a frontend developer, and after training at M.T.T, I fulfilled my longtime wish.',
    },
    {
      image: logo,
      name: 'Venus Khatievi',
      title: 'School Alumni',
      testimonial: 'Studying at M.T.T has been fruitful, and I’ve gained incredible skills in ICT, from computer training to website creation!',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCuCOisgxyOypyBi-hRYYV2Onv7KVI6QTVA&s',
      name: 'Alex Munene',
      title: 'Mentor',
      testimonial: 'It is facinating to see students grow in their tech skills. I am proud to be part of their journey!',
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3',
      name: 'James Otieno',
      title: 'School Alumni',
      testimonial: 'M.T.T’s Cybersecurity training gave me hands-on skills that landed me a job in network security.',
    },
    {
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3',
      name: 'Azhar',
      title: 'Mentor',
      testimonial: 'Teaching at Morgan Technical Training has been rewarding—helping students grow in tech is inspiring!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToSlide((currentIndex + 1) % testimonials.length),
    onSwipedRight: () => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <Helmet>
        {/* <title>Morgan Technical Training</title>
        <meta
          name="description"
          content="Explore top tech courses at Morgan Technical Training in software engineering, cybersecurity, and data science. Start your career remotely."
        />
        <meta name="keywords" content="Morgan Technical Training, tech bootcamp Kikuyu, software engineering, cybersecurity, data science, remote tech courses" />
        <link rel="canonical" href="https://morgantechnicaltraining.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "School",
              "name": "Morgan Technical Training",
              "description": "A technical training bootcamp offering courses in software engineering, cybersecurity, and data science.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kikuyu Town, opposite Cleanshelf",
                "addressLocality": "Kikuyu",
                "addressRegion": "Kiambu County",
                "postalCode": "00902",
                "addressCountry": "Kenya"
              },
              "telephone": "+254726152560",
              "email": "morgantechnical72@gmail.com",
              "url": "https://morgantechnicaltraining.com"
            }
          `}
        </script> */}
      </Helmet>
      <Navbar />
      <div>
        {/* Hero Section (Unchanged) */}
        <section
          id="hero-section"
          className="relative bg-gradient-to-b from-indigo-900 to-purple-900 h-[800px] flex flex-col justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb"
              alt="Hero Background"
              className={`object-cover w-full h-full transition-transform duration-1000 ease-out ${
                visibleSections.hero ? 'scale-100 opacity-90' : 'scale-110 opacity-0'
              }`}
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
          </div>
          <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-4 sm:px-6">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold font-inter tracking-tight transition-all duration-1000 ease-out ${
                visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Welcome to <span className="text-orange-400">Morgan Technical Training</span>
            </h1>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-4 transition-all duration-1000 ease-out delay-200 ${
                visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Empowering Your Digital Future
            </h2>
            <p
              className={`text-lg sm:text-xl lg:text-2xl mt-6 max-w-3xl mx-auto font-inter transition-all duration-1000 ease-out delay-400 ${
                visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Join us in navigating the world of technology with innovative solutions designed for your success.
            </p>
            <Link
              to="/courses"
              className={`mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-inter text-lg font-semibold shadow-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 ${
                visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } delay-600`}
            >
              Start Your Journey
            </Link>
          </div>
        </section>

        {/* Courses Section */}
        <section
          id="top-courses-section"
          className={`py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-black transition-all duration-1000 ease-out ${
            visibleSections.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6 text-indigo-900">
              Unlock Your Tech Potential
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto font-inter text-gray-700">
              Explore cutting-edge courses in Software Engineering, Cybersecurity, and Data Science—fully remote and tailored for the future.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Software Engineering',
                  description: 'Master full-stack development with React, Node.js, and Python through hands-on, remote projects.',
                  link: '/software',
                },
                {
                  title: 'Cybersecurity',
                  description: 'Secure networks and data with expert-led remote training and real-time simulations.',
                  link: '/cybersecurity',
                },
                {
                  title: 'Data Science',
                  description: 'Dive into data analysis and machine learning with flexible, remote coursework.',
                  link: '/datascience',
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className={`bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-200/50 ${
                    visibleSections.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } delay-${index * 200}`}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-600 font-inter">
                    {course.title}
                  </h3>
                  <p className="text-md sm:text-lg text-gray-600 font-inter mb-6">{course.description}</p>
                  <Link
                    to={course.link}
                    className="inline-block text-orange-500 hover:text-orange-600 font-inter font-medium text-lg underline transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials-section"
          className={`py-16 sm:py-20 bg-gradient-to-r from-indigo-100 to-purple-100 transition-all duration-1000 ease-out ${
            visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div
                className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
                  visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6 text-indigo-900">
                  Committed to Excellence
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-inter text-gray-700">
                  Our mission is to provide outstanding tech skills to our students and ensure they feel satisfied. We
                  have a variety of fascinating courses like{' '}
                  <Link
                    to="/software"
                    className="text-orange-500 hover:text-orange-600 font-medium underline transition-colors duration-300"
                  >
                    Software Engineering
                  </Link>
                  . Remember, the secret of getting ahead is getting started.
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold font-inter text-orange-600 mb-4">
                  Hear Our Students
                </h3>
                <p className="text-md sm:text-lg italic text-gray-600 font-inter">
                  “The digital world is here, and we must embrace it.”
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative" {...handlers}>
                  <div className="overflow-hidden relative h-80 sm:h-96">
                    <div
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className={`flex-shrink-0 w-full h-full flex items-center justify-center bg-white/90 backdrop-blur-lg text-black shadow-xl p-8 rounded-2xl border border-gray-200/50 transition-all duration-700 ${
                            visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          } delay-${index * 100}`}
                        >
                          <div className="text-center">
                            <p className="text-lg sm:text-xl font-inter text-gray-700 mb-6">
                              {testimonial.testimonial}
                            </p>
                            <div className="flex items-center justify-center gap-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-110"
                              />
                              <div>
                                <p className="font-bold font-inter text-lg text-indigo-900">
                                  {testimonial.name}
                                </p>
                                <p className="text-md font-inter text-gray-600">{testimonial.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-orange-500 scale-125'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollButton />
      </div>
      <Footer />
    </>
  );
};

export default Home;