import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { FaArrowDown } from 'react-icons/fa';
// logos
import logo from '../../assets/class2.jpg'
import HTML from '../../assets/html.png';
import CSS from '../../assets/CSS.png';
import JavaScript from '../../assets/JavaScript.png';
import ReactImg from '../../assets/images.png';
import Node from '../../assets/nodejs.jpg';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';
import Flask from '../../assets/flask.png';
import Python from '../../assets/python-programming-language.webp'


const Software: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    highschool: '',
    course: 'Software Engineering',
    feedback: ''
  });

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
      feedback: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          highschool: formData.highschool,
          course: formData.course,
          feedback: formData.feedback,
        }),
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
        feedback: ''
      });

      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Formcarry error:', error);
      setNotification('Failed to send application. Please try again later.');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <>
      <NavBar />
      <div className={`bg-white text-black ${isModalOpen ? 'blur-lg' : ''}`}>
        {/* Hero Section */}
        <section className="relative bg-gray-800 h-[700px] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={logo}
              alt="Software Engineering Hero Background"
              className={`object-cover w-full h-full transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
              }}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-4">
            <h1 className={`text-4xl md:text-5xl font-bold transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}>
              Software Engineering Course
            </h1>
            <p className={`text-md md:text-lg mb-8 transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'} delay-1000`}>
              Build a solid foundation in software engineering with our comprehensive, fully remote program
            </p>
            <button onClick={openModal} className="bg-orange-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-white hover:text-orange-600 cursor-pointer transition duration-300 text-lg">
              Apply Now
            </button>
          </div>
        </section>

        {/* Intake Information */}
        <div className="w-full bg-orange-600 text-white py-16 px-4 text-center md:text-3xl sm:text-2xl text-xl">
          <p>
            This course is fully remote and applications are ongoing for the <b>May 19th, 2025</b> intake
          </p>
        </div>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold text-orange-600 mb-8">Course Overview</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our Software Engineering course is designed to equip you with the skills needed to excel in the tech industry. 
              This fully remote program offers a comprehensive curriculum that covers both frontend and backend development, 
              preparing you to build robust, scalable applications. With hands-on projects and expert guidance, you'll gain practical 
              experience in modern technologies and methodologies.
            </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold text-orange-600 mb-8">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Comprehensive Curriculum</h3>
                <p>
                  Learn a wide range of technologies including HTML, CSS, JavaScript, and Python, along with frameworks like React and Flask.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Hands-On Projects</h3>
                <p>
                  Build real-world projects to apply your skills, from responsive web designs to full-stack applications.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Expert-Led Instruction</h3>
                <p>
                  Receive mentorship from industry professionals with years of experience in software engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Covered */}
        <div className="w-full min-h-screen bg-gray-200 from-blue-500 via-purple-200 to-blue-500 text-gray-300 py-16">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-6 flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-orange-600 mb-8">Technologies covered</h2>
          <p className="py-4 text-xl text-black">These are the technologies you'll cover when studying the program</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center">
          {/* Skill Item */}
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={HTML} alt="HTML icon" />
            <p className="mt-4 text-lg font-semibold">HTML</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={CSS} alt="CSS icon" />
            <p className="mt-4 text-lg font-semibold">CSS</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={JavaScript} alt="JavaScript icon" />
            <p className="mt-4 text-lg font-semibold">JavaScript</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={ReactImg} alt="React icon" />
            <p className="mt-4 text-lg font-semibold">React</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Node} alt="Node.js icon" />
            <p className="mt-4 text-lg font-semibold">Node</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Flask} alt="Flask icon" />
            <p className="mt-4 text-lg font-semibold">Flask</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Tailwind} alt="TailwindCSS icon" />
            <p className="mt-4 text-lg font-semibold">TailwindCSS</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={GitHub} alt="GitHub icon" />
            <p className="mt-4 text-lg font-semibold">GitHub</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Python} alt="GitHub icon" />
            <p className="mt-4 text-lg font-semibold">Python</p>
          </div>
        </div>
      </div>
    </div>

        {/* Course Requirements */}
        <div className="w-full bg-gray-100 py-16 px-4 sm:px-16">
          <div className="max-w-[100%] mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center text-black">
              <h2 className="text-4xl font-semibold text-orange-600 mb-8">Course Requirements</h2>
              <ul className="list-disc list-inside text-left space-y-2 text-lg">
                <li>Stable internet connection with at least 10 Mbps download speed for remote learning.</li>
                <li>Basic understanding of computer operations and file management.</li>
                <li>Commitment to 20 hours per week for study, projects, and self-learning.</li>
                <li>Proficiency in written and spoken English (course materials and instructions are in English).</li>
                <li>Access to development tools such as code editors (e.g., VS Code) and web browsers (e.g., Chrome).</li>
                <li>Willingness to collaborate on team projects and group assignments.</li>
                <li>Professional demeanor and adherence to the institution's code of conduct.</li>
                <li>Regular attendance in live online classes (prior approval required for absences).</li>
              </ul>
            </div>
            <img
              className="w-[700px] h-[300px] mx-auto rounded-3xl my-4"
              src={logo}
              alt="Software Engineering"
            />
          </div>
        </div>

        {/* Course Content with Interactive Roadmap */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold text-orange-600 mb-8">Course Content</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Course Modules List */}
              <ul className="list-disc list-inside text-left space-y-2 text-lg">
                <li>Frontend Development: HTML5, CSS3, Tailwind CSS</li>
                <li>JavaScript (ES6+), node and React.js Fundamentals</li>
                <li>Backend Development: Python, Flask</li>
                <li>Database Management: SQLite3</li>
                <li>Building Full-Stack Applications</li>
                <li>API Development and Integration</li>
                <li>Version Control with Git</li>
                <li>Capstone Project: Develop a Complete Software Solution</li>
              </ul>

              {/* Interactive Roadmap */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Your Learning Journey</h3>
                <div className="relative pl-8">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-0 h-full w-1 bg-indigo-200"></div>

                  {/* Roadmap Items */}
                  <div className="space-y-8">
                    {/* Week 1-6: Frontend Development */}
                    <div className="relative">
                      <div className="absolute left-2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white"></div>
                      <div className="ml-12 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-semibold text-indigo-600">Weeks 1-6: Frontend Foundations</h4>
                        <p className="text-gray-700">Master HTML5, CSS3, Tailwind CSS, and JavaScript to build interactive user interfaces.</p>
                      </div>
                    </div>

                    {/* Week 7-10: React.js */}
                    <div className="relative">
                      <div className="absolute left-2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white"></div>
                      <div className="ml-12 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-semibold text-indigo-600">Weeks 7-10: Frontend with React</h4>
                        <p className="text-gray-700">Dive into React.js, learning components, state management, and hooks for dynamic apps.</p>
                      </div>
                    </div>

                    {/* Week 11-16: Backend Development */}
                    <div className="relative">
                      <div className="absolute left-2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white"></div>
                      <div className="ml-12 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-semibold text-indigo-600">Weeks 11-16: Backend Mastery</h4>
                        <p className="text-gray-700">Learn Python, Flask, and Sqlite3 to build robust server-side applications.</p>
                      </div>
                    </div>

                    {/* Week 16-18: Full-Stack & Capstone */}
                    <div className="relative">
                      <div className="absolute left-2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white"></div>
                      <div className="ml-12 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-semibold text-indigo-600">Weeks 16-18: Full-Stack & Capstone Project</h4>
                        <p className="text-gray-700">Integrate frontend and backend, use Git, and complete a capstone project.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Duration & Payment */}
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
          <div className="container mx-auto px-6 lg:px-12 text-center space-y-16">
            {/* Course Duration */}
            <div>
              <h2 className="text-4xl font-semibold text-orange-600 mb-8">Course Duration</h2>
              <p className="text-lg md:text-xl text-gray-700">
                The Software Engineering course spans 18 weeks of intensive, fully remote training, 
                designed to take you from beginner to job-ready software engineer.
              </p>
            </div>

            {/* Payment Plans */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">Payment Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Full Payment</h3>
                  <p className="text-gray-600 mb-4">Pay upfront and save on the total cost.</p>
                  <p className="text-3xl font-bold text-gray-800">KSH 120,000</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Installment Plan</h3>
                  <p className="text-gray-600 mb-4 flex items-center justify-center">
                    Pay in 4 installments of KSH 32,000 each over a period of 4 months, totaling to Kshs 128,000/=
                    <FaArrowDown className="ml-2 text-indigo-500 text-lg animate-bounce hover:text-indigo-700 transition-colors duration-200" />
                  </p>
                  <p className="text-3xl font-bold text-gray-800">KSH 128,000</p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">Ready to Join?</h2>
              <button onClick={openModal} className="bg-orange-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-orange-600 cursor-pointer transition duration-300 text-lg md:text-xl">
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Form Container */}
          <div className="relative w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg overflow-auto h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              ✕
            </button>

            {/* Notification Section */}
            {notification && (
              <div className="mb-4 p-4 text-center bg-green-100 text-green-800 rounded-lg">
                {notification}
              </div>
            )}

            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Application Form</h2>
            <form onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* High School Completion */}
              <div className="mb-4">
                <label className="block text-gray-700">Have you completed high school?</label>
                <select
                  name="highschool"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.highschool}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Course of Study */}
              <div className="mb-4">
                <label className="block text-gray-700">Course Of Study</label>
                <select
                  name="course"
                  className="w-full border border-gray-300 rounded-lg p-2 bg-gray-200 cursor-not-allowed"
                  value={formData.course}
                  onChange={handleChange}
                  disabled
                >
                  <option value="Software Engineering">Software Engineering</option>
                </select>
              </div>

              {/* Feedback */}
              <div className="mb-4">
                <label className="block text-gray-700">How did you hear about Morgan Technical Training?*</label>
                <textarea
                  name="feedback"
                  required
                  placeholder="...."
                  className="w-full border border-gray-300 rounded-lg p-2"
                  rows={3}
                  value={formData.feedback}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-4">
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Software;