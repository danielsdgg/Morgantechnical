import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/class2.jpg';
import HTML from '../../assets/html.png';
import CSS from '../../assets/CSS.png';
import JavaScript from '../../assets/JavaScript.png';
import ReactImg from '../../assets/images.png';
import Node from '../../assets/nodejs.jpg';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';
import Flask from '../../assets/flask.png';
import Python from '../../assets/python-programming-language.webp';

const Software: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intake: false,
    overview: false,
    expect: false,
    tech: false,
    requirements: false,
    content: false,
    duration: false,
    alumni: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    highschool: '',
    course: 'Software Engineering',
    feedback: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);

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
      'hero',
      'intake',
      'overview',
      'expect',
      'tech',
      'requirements',
      'content',
      'duration',
      'alumni',
    ].map((id) => document.querySelector(`#${id}-section`));

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const timer = setTimeout(() => {
      setVisibleSections({
        hero: true,
        intake: true,
        overview: true,
        expect: true,
        tech: true,
        requirements: true,
        content: true,
        duration: true,
        alumni: true,
      });
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      clearTimeout(timer);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      highschool: '',
      course: 'Software Engineering',
      feedback: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formcarry.com/s/-49z_wo5br3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setNotification('Your application was submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        highschool: '',
        course: 'Software Engineering',
        feedback: '',
      });

      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Formcarry error:', error);
      setNotification('Failed to send application. Please try again later.');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const faqs = [
    {
      question: 'Can I switch payment plans later?',
      answer: 'Yes, you can switch from the installment plan to full payment before the third installment. Contact our team for assistance.',
    },
    {
      question: 'Are there scholarships available?',
      answer: 'We offer limited scholarships based on financial need and merit but at the moment there are no scholarships available.',
    },
    {
      question: 'What happens if I miss a payment?',
      answer: 'If you miss a payment, we’ll contact you to arrange a solution. Continued non-payment may pause your course access until resolved.',
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Software Engineering Program | Morgan Technical Training</title>
        <meta
          name="description"
          content="Join our 18-week remote Software Engineering bootcamp at Morgan Technical Training in Nairobi. Master HTML, CSS, JavaScript, React, Python, Flask, and more through hands-on projects."
        />
        <meta
          name="keywords"
          content="software engineering course, Morgan Technical Training, Nairobi tech bootcamp, learn coding, HTML, React, Python, Flask, remote tech course"
        />
      </Helmet>
      <NavBar />

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`bg-white text-black ${isModalOpen ? 'blur-lg' : ''}`}>
        {/* Section 1: Hero */}
        <section
          id="hero-section"
          className={`relative bg-gradient-to-b from-indigo-900 to-purple-900 flex flex-col justify-center overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] transition-all duration-1000 ease-out ${
            visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={logo}
              alt="Students coding in Morgan Technical Training's Software Engineering course"
              className="object-cover w-full h-full"
              loading="lazy"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/1920x1080?text=Hero+Image')}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 to-purple-900/60"></div>
          </div>
          <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-gray-200/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter text-orange-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Software Engineering Bootcamp
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Build a solid foundation in software engineering with our 18-week, fully remote program designed to launch your tech career.
              </motion.p>
              <motion.button
                onClick={openModal}
                className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-inter font-semibold text-md sm:text-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                aria-label="Apply now for Software Engineering course"
              >
                Apply Now
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Intake Information */}
        <section
          id="intake-section"
          className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
            visibleSections.intake ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fully remote course | Applications open for the <b>June 2025</b> intake
          </motion.p>
        </section>

        {/* Section 3: Overview */}
        <section
          id="overview-section"
          className={`py-16 sm:py-20 bg-gray-50 transition-all duration-1000 ease-out ${
            visibleSections.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-orange-400 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Course Overview
            </motion.h2>
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/20 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-inter leading-relaxed">
                Our Software Engineering bootcamp equips you with in-demand skills to thrive in the tech industry. This 18-week remote program covers
                frontend and backend development, enabling you to build scalable, real-world applications. With hands-on projects and expert mentorship,
                you’ll graduate job-ready with a professional portfolio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 4: What to Expect */}
        <section
          id="expect-section"
          className={`py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-purple-50 transition-all duration-1000 ease-out ${
            visibleSections.expect ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              What You’ll Gain
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold font-inter text-indigo-900 mb-4">
                  In-Depth Curriculum
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-inter">
                  Master modern tools like React, Flask, and Python to build full-stack applications from scratch.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold font-inter text-indigo-900 mb-4">
                  Real-World Projects
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-inter">
                  Develop a portfolio of projects, including responsive websites and full-stack apps, to showcase your skills.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold font-inter text-indigo-900 mb-4">
                  Expert Mentorship
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-inter">
                  Learn from seasoned developers who provide personalized guidance throughout your journey.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Technologies Covered */}
        <section
          id="tech-section"
          className={`py-16 sm:py-20 bg-gray-50 transition-all duration-1000 ease-out ${
            visibleSections.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Technologies You’ll Master
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
              {[
                { src: HTML, name: 'HTML', tooltip: 'Structure web pages' },
                { src: CSS, name: 'CSS', tooltip: 'Style web interfaces' },
                { src: JavaScript, name: 'JavaScript', tooltip: 'Add interactivity' },
                { src: ReactImg, name: 'React', tooltip: 'Build dynamic UIs' },
                { src: Node, name: 'Node.js', tooltip: 'Run JavaScript server-side' },
                { src: Flask, name: 'Flask', tooltip: 'Create lightweight APIs' },
                { src: Tailwind, name: 'Tailwind CSS', tooltip: 'Style with utility classes' },
                { src: GitHub, name: 'GitHub', tooltip: 'Manage code versions' },
                { src: Python, name: 'Python', tooltip: 'Develop backend logic' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group bg-white/90 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <img
                    className="w-16 sm:w-20 mx-auto group-hover:opacity-80"
                    src={tech.src}
                    alt={`${tech.name} icon for Software Engineering course`}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100?text=Tech+Icon')}
                  />
                  <p className="mt-4 text-md sm:text-lg font-semibold font-inter text-indigo-900 text-center">
                    {tech.name}
                  </p>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-indigo-900 text-white text-xs rounded py-1 px-2">
                    {tech.tooltip}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Course Requirements */}
        <section
          id="requirements-section"
          className={`py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-purple-50 transition-all duration-1000 ease-out ${
            visibleSections.requirements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Course Requirements
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 font-inter">
                  {[
                    'Stable internet connection (10 Mbps+ for remote learning)',
                    'Basic computer literacy and file management skills',
                    'Commitment to 20 hours/week for study and projects',
                    'Proficiency in written and spoken English',
                    'Access to code editors (e.g., VS Code) and browsers (e.g., Chrome)',
                    'Willingness to collaborate on team projects',
                    'Professional demeanor and adherence to code of conduct',
                    'Regular attendance in live online classes',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.img
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
                src={logo}
                alt="Coding classroom at Morgan Technical Training"
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Classroom+Image')}
              />
            </div>
          </div>
        </section>

        {/* Section 7: Course Content */}
        <section
          id="content-section"
          className={`py-16 sm:py-20 bg-gray-50 transition-all duration-1000 ease-out ${
            visibleSections.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Course Content
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-4">
                  Modules Covered
                </h3>
                <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 font-inter">
                  {[
                    'Frontend: HTML5, CSS3, Tailwind CSS',
                    'JavaScript (ES6+), Node, React.js',
                    'Backend: Python, Flask',
                    'Database: SQLite3',
                    'Full-Stack Application Development',
                    'API Development and Integration',
                    'Version Control with Git',
                    'Capstone: Build a Complete Software Solution',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-6 text-center">
                  Your Learning Journey
                </h3>
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute left-2 sm:left-4 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-orange-600"></div>
                  {[
                    {
                      weeks: 'Weeks 1-6',
                      title: 'Frontend Foundations',
                      desc: 'Master HTML5, CSS3, Tailwind CSS, and JavaScript to build interactive user interfaces.',
                    },
                    {
                      weeks: 'Weeks 7-10',
                      title: 'Frontend with React',
                      desc: 'Dive into React.js, learning components, state management, and hooks for dynamic apps.',
                    },
                    {
                      weeks: 'Weeks 11-16',
                      title: 'Backend Mastery',
                      desc: 'Learn Python, Flask, and SQLite3 to build robust server-side applications.',
                    },
                    {
                      weeks: 'Weeks 16-18',
                      title: 'Full-Stack & Capstone',
                      desc: 'Integrate frontend and backend, use Git, and complete a capstone project.',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative mb-6 sm:mb-8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    >
                      <div className="absolute left-0 sm:left-2 w-4 sm:w-6 h-4 sm:h-6 bg-orange-500 rounded-full border-2 sm:border-4 border-white"></div>
                      <div className="ml-8 sm:ml-12 bg-white/90 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300">
                        <h4 className="text-md sm:text-lg font-semibold font-inter text-indigo-900">
                          {item.weeks}: {item.title}
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base font-inter">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 8: Course Duration & Payment */}
        <section
          id="duration-section"
          className={`py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-purple-50 transition-all duration-1000 ease-out ${
            visibleSections.duration ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-12 sm:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-6">
                Course Duration
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-inter max-w-3xl mx-auto">
                Our 18-week intensive bootcamp is fully remote, transforming beginners into job-ready software engineers
                through hands-on training.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-6">
                Payment Plans
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
                <motion.div
                  className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-4">
                    Full Payment
                  </h3>
                  <p className="text-gray-700 font-inter mb-4 text-sm sm:text-base">
                    Pay upfront and save on the total cost.
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold font-inter text-indigo-900">KSH 120,000</p>
                </motion.div>
                <motion.div
                  className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-4">
                    Installment Plan
                  </h3>
                  <p className="text-gray-700 font-inter mb-4 text-sm sm:text-base flex items-center justify-center">
                    4 installments of KSH 32,000 over 4 months
                    <FaArrowDown className="ml-2 text-orange-500 animate-bounce" />
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold font-inter text-indigo-900">KSH 128,000</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold font-inter text-orange-400 mb-4">
                Payment FAQs
              </h3>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-200/20 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <button
                    className="w-full text-left text-base sm:text-lg font-semibold font-inter text-indigo-900 flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-${index}`}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-${index}`}
                      className="mt-2 text-gray-700 font-inter text-sm sm:text-base"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-6">
                Ready to Start?
              </h2>
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-full font-inter font-semibold text-md sm:text-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
                aria-label="Apply now for Software Engineering course"
              >
                Apply Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* Section 9: Alumni Success */}
        <section
          id="alumni-section"
          className={`py-16 sm:py-20 bg-gray-50 transition-all duration-1000 ease-out ${
            visibleSections.alumni ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Alumni Success
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-gray-700 font-inter text-base sm:text-lg italic mb-4">
                  “This course transformed my career. I landed a mentorship role at the bootcamp.”
                </p>
                <p className="text-indigo-900 font-inter font-semibold">— Alex M., Class of 2024</p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-gray-700 font-inter text-base sm:text-lg italic mb-4">
                  “The hands-on projects and mentorship gave me the confidence to build real-world apps and start my own startup.”
                </p>
                <p className="text-indigo-900 font-inter font-semibold">— Wilson, Class of 2025</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      {
  isModalOpen && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="dialog"
      aria-labelledby="application-form-title"
      aria-modal="true"
    >
      <motion.div
        className="relative w-full max-w-md sm:max-w-lg mx-auto bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-2xl border border-orange-400/20 overflow-auto max-h-[90vh]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-gray-200/20 text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-300 group"
          aria-label="Close application form"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-lg">✕</span>
          <span className="absolute hidden group-hover:block bg-indigo-900 text-white text-xs rounded py-1 px-2 -top-8 right-0">
            Close form
          </span>
        </motion.button>

        {/* Notification */}
        {notification && (
          <motion.div
            className={`mb-6 p-4 text-center rounded-xl ${
              notification.includes('successfully')
                ? 'bg-green-100/90 backdrop-blur-md border border-green-200 text-green-800'
                : 'bg-red-100/90 backdrop-blur-md border border-red-200 text-red-800'
            } shadow-md`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            role="alert"
            aria-describedby="notification-message"
          >
            <span id="notification-message">{notification}</span>
          </motion.div>
        )}

        {/* Form Title */}
        <motion.h2
          id="application-form-title"
          className="text-2xl sm:text-3xl font-bold font-inter text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Apply for Software Engineering
          <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform -translate-x-1/2 rounded-full"></span>
        </motion.h2>

        {/* Form */}
        <form onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <label
                htmlFor="fullName"
                className="flex items-center text-gray-800 font-inter font-semibold text-sm sm:text-base mb-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="Enter your full name"
                className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:scale-105 transition-all duration-300 font-inter text-sm sm:text-base"
                value={formData.fullName}
                onChange={handleChange}
                aria-label="Full name input for application"
              />
            </motion.div>

            {/* Email Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="flex items-center text-gray-800 font-inter font-semibold text-sm sm:text-base mb-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:scale-105 transition-all duration-300 font-inter text-sm sm:text-base"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email address input for application"
              />
            </motion.div>

            {/* Phone Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label
                htmlFor="phone"
                className="flex items-center text-gray-800 font-inter font-semibold text-sm sm:text-base mb-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:scale-105 transition-all duration-300 font-inter text-sm sm:text-base"
                value={formData.phone}
                onChange={handleChange}
                aria-label="Phone number input for application"
              />
            </motion.div>

            {/* Gender */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label
                htmlFor="gender"
                className="flex items-center text-gray-800 font-inter font-semibold text-sm sm:text-base mb-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:scale-105 transition-all duration-300 font-inter text-sm sm:text-base"
                value={formData.gender}
                onChange={handleChange}
                aria-label="Gender selection for application"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </motion.div>
          </div>

          {/* High School */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <label
              htmlFor="highschool"
              className="flex items-center text-gray-800 font-inter font-semibold text-sm sm:text-base mb-2"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Have you completed high school?
            </label>
            <select
              id="highschool"
              name="highschool"
              className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:scale-105 transition-all duration-300 font-inter text-sm sm:text-base"
              value={formData.highschool}
              onChange={handleChange}
              aria-label="High school completion status for application"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </motion.div>

          {/* Course of Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <label
              htmlFor="course"
              className="flex items-center text-gray-800 font-inter font-semibold text-sm sm:text-base mb-2"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Course of Study
            </label>
            <select
              id="course"
              name="course"
              className="w-full bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-200 rounded-xl p-3 shadow-inner italic text-gray-600 cursor-not-allowed font-inter text-sm sm:text-base"
              value={formData.course}
              onChange={handleChange}
              disabled
              aria-label="Course of study (Software Engineering, disabled)"
            >
              <option value="Software Engineering">Software Engineering</option>
            </select>
          </motion.div>

          {/* Feedback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <label
              htmlFor="feedback"
              className="flex items-center text-gray-800 font-inter font-semibold text-sm sm:text-base mb-2"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              How did you hear about us? *
            </label>
            <textarea
              id="feedback"
              name="feedback"
              required
              placeholder="Tell us how you found Morgan Technical Training"
              className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:scale-105 transition-all duration-300 font-inter text-sm sm:text-base resize-y"
              rows={5}
              value={formData.feedback}
              onChange={handleChange}
              aria-label="Feedback on how you heard about Morgan Technical Training"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-inter font-semibold text-base sm:text-lg hover:from-orange-600 hover:to-orange-800 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              aria-label="Submit application form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Submit Application</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  )}

      <ScrollButton />
      <Footer />
    </>
  );
};

export default Software;