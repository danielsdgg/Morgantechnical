import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { FaArrowDown } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// Logos (placeholders - replace with actual paths)
import logo from '../../assets/cyber.jpg';
import Python from '../../assets/python-programming-language.webp';
import Wireshark from '../../assets/wireshark.png';
import KaliLinux from '../../assets/kali-linux.jpg';
import Nmap from '../../assets/nmap.jpg';
import Metasploit from '../../assets/metasploit.png';
import BurpSuite from '../../assets/burp.png';
import Linux from '../../assets/linux.png';
import Git from '../../assets/git.png';
import Firewall from '../../assets/firewall.png';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Cybersecurity: React.FC = () => {
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
    course: 'Cybersecurity',
    feedback: ''
  });

//   const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      highschool: '',
      course: 'Cybersecurity',
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
        course: 'Cybersecurity',
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
    <Helmet>
    <title>Cybersecurity Program - Morgan Technical Training</title>
    <meta
        name="description"
        content="Join our 25-week remote Cybersecurity course at Morgan Technical Training. Master Kali Linux, Nmap, and more to become an expert."
    />
    </Helmet>
      <NavBar />
      <div className={`bg-white text-black ${isModalOpen ? 'blur-lg' : ''}`}>
        {/* Hero Section */}
        <section className="relative bg-gray-800 flex flex-col justify-center overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <div className="absolute inset-0">
            <img
              src={logo}
              alt="Cybersecurity Hero Background"
              className={`object-cover w-full h-full transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Parallax effect
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}>
              Cybersecurity Course
            </h1>
            <p className={`text-sm sm:text-md md:text-lg mb-6 sm:mb-8 transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'} delay-1000`}>
              Protect the digital world with our in-depth, fully remote Cybersecurity program
            </p>
            <NavLink to={'/cyber'}>
            <button  className="bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-white hover:text-orange-600 cursor-pointer transition duration-300 text-md sm:text-lg">
              Apply Now
            </button></NavLink>
          </div>
        </section>

        {/* Intake Information */}
        <div className="w-full bg-orange-600 text-white py-12 px-4 sm:px-6 lg:px-8 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <p>
          This course is fully remote and applications are currently <b>closed</b> temporarily
          </p>
        </div>

        {/* Overview Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 sm:mb-8">Course Overview</h2>
            <p className="text-md sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our Cybersecurity course equips you with the skills to safeguard systems and networks from modern threats. This 25-week, fully remote program 
              dives into ethical hacking, network security, and incident response, preparing you for a career in this critical field. With practical labs and expert 
              mentorship, you’ll learn to identify vulnerabilities and implement robust defenses.
            </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 sm:mb-8">What to Expect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">Comprehensive Training</h3>
                <p className="text-sm sm:text-base">
                  Gain expertise in tools like Wireshark, Nmap, and Metasploit, alongside core security concepts.
                </p>
              </div>
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">Hands-On Labs</h3>
                <p className="text-sm sm:text-base">
                  Simulate real-world attacks and defenses in virtual environments, fully remotely.
                </p>
              </div>
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">Expert-Led Instruction</h3>
                <p className="text-sm sm:text-base">
                  Learn from cybersecurity professionals with real-world experience in threat mitigation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Covered */}
        <div className="w-full bg-gray-200 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center w-full">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 sm:mb-8">Technologies Covered</h2>
              <p className="text-md sm:text-lg md:text-xl text-black">Essential tools and platforms you’ll master in this program</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={Python} alt="Python icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Python</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={Wireshark} alt="Wireshark icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Wireshark</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={KaliLinux} alt="Kali Linux icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Kali Linux</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={Nmap} alt="Nmap icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Nmap</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={Metasploit} alt="Metasploit icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Metasploit</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={BurpSuite} alt="Burp Suite icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Burp Suite</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={Linux} alt="Linux icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Linux</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={Git} alt="Git icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Git</p>
              </div>
              <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-4 sm:p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
                <img className="w-16 sm:w-20 md:w-24 mx-auto group-hover:opacity-80" src={Firewall} alt="Firewall icon" />
                <p className="mt-4 text-md sm:text-lg font-semibold text-gray-300">Firewall</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Requirements */}
        <div className="w-full bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col justify-center text-black">
              <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 sm:mb-8">Course Requirements</h2>
              <ul className="list-disc list-inside text-left space-y-2 text-sm sm:text-md md:text-lg">
                <li>Stable internet connection with at least 10 Mbps download speed for remote learning.</li>
                <li>Basic understanding of computer networks and operating systems.</li>
                <li>Commitment to 20 hours per week for study, labs, and self-learning.</li>
                <li>Proficiency in written and spoken English (course materials are in English).</li>
                <li>Access to a laptop capable of running virtual machines (e.g., Kali Linux).</li>
                <li>Willingness to collaborate on group security projects and simulations.</li>
                <li>Professional demeanor and adherence to the institution's code of conduct.</li>
                <li>Regular attendance in live online classes (prior approval required for absences).</li>
              </ul>
            </div>
            <img
              className="w-full h-auto sm:h-[200px] md:h-[250px] lg:h-[300px] mx-auto rounded-3xl my-4 object-cover"
              src={logo}
              alt="Cybersecurity"
            />
          </div>
        </div>

        {/* Course Content with Interactive Roadmap */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 sm:mb-8">Course Content</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Course Modules List */}
              <ul className="list-disc list-inside text-left space-y-2 text-sm sm:text-md md:text-lg">
                <li>Networking Fundamentals and Security</li>
                <li>Ethical Hacking with Kali Linux and Metasploit</li>
                <li>Network Analysis using Wireshark and Nmap</li>
                <li>Web Application Security with Burp Suite</li>
                <li>Python for Security Scripting</li>
                <li>Incident Response and Forensics</li>
                <li>Capstone Project: Secure a Simulated Network</li>
              </ul>

              {/* Interactive Roadmap */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4 sm:mb-6">Your Learning Journey</h3>
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute left-2 sm:left-4 top-0 h-full w-1 bg-indigo-200"></div>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="relative">
                      <div className="absolute left-0 sm:left-2 w-4 sm:w-6 h-4 sm:h-6 bg-indigo-600 rounded-full border-2 sm:border-4 border-white"></div>
                      <div className="ml-8 sm:ml-12 bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-md sm:text-lg font-semibold text-indigo-600">Weeks 1-6: Security Basics</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Learn networking fundamentals, Linux basics, and introductory security concepts.</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 sm:left-2 w-4 sm:w-6 h-4 sm:h-6 bg-indigo-600 rounded-full border-2 sm:border-4 border-white"></div>
                      <div className="ml-8 sm:ml-12 bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-md sm:text-lg font-semibold text-indigo-600">Weeks 7-12: Ethical Hacking</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Master Kali Linux, Nmap, and Metasploit for penetration testing.</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 sm:left-2 w-4 sm:w-6 h-4 sm:h-6 bg-indigo-600 rounded-full border-2 sm:border-4 border-white"></div>
                      <div className="ml-8 sm:ml-12 bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-md sm:text-lg font-semibold text-indigo-600">Weeks 13-20: Advanced Security</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Dive into Wireshark, Burp Suite, and Python scripting for security.</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 sm:left-2 w-4 sm:w-6 h-4 sm:h-6 bg-indigo-600 rounded-full border-2 sm:border-4 border-white"></div>
                      <div className="ml-8 sm:ml-12 bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-md sm:text-lg font-semibold text-indigo-600">Weeks 21-25: Response & Capstone</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Explore incident response and complete a capstone securing a network.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Duration & Payment */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-100 to-gray-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-12 sm:space-y-16">
            {/* Course Duration */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 sm:mb-8">Course Duration</h2>
              <p className="text-md sm:text-lg md:text-xl text-gray-700">
                The Cybersecurity course spans 25 weeks of intensive, fully remote training, designed to take you from beginner to cybersecurity expert.
              </p>
            </div>

            {/* Payment Plans */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">Payment Plans</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-600">Full Payment</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">Pay upfront and save on the total cost.</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">KSH 120,000</p>
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-600">Installment Plan</h3>
                  <p className="text-gray-600 mb-4 flex items-center justify-center text-sm sm:text-base">
                    Pay in 4 installments of KSH 32,000 each over 4 months, totaling KSH 128,000
                    <FaArrowDown className="ml-2 text-indigo-500 text-md sm:text-lg animate-bounce hover:text-indigo-700 transition-colors duration-200" />
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">KSH 128,000</p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">Ready to Join?</h2>
              <NavLink to={'/cyber'}><button className="bg-orange-600 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg hover:bg-white hover:text-orange-600 cursor-pointer transition duration-300 text-md sm:text-lg md:text-xl">
                Apply Now
              </button> </NavLink>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative w-full max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg overflow-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-lg sm:text-xl"
            >
              ✕
            </button>
            {notification && (
              <div className="mb-4 p-4 text-center bg-green-100 text-green-800 rounded-lg text-sm sm:text-base">
                {notification}
              </div>
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-center text-indigo-600 mb-4 sm:mb-6">Application Form</h2>
            <form onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base">Gender</label>
                  <select
                    name="gender"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm sm:text-base">Have you completed high school?</label>
                <select
                  name="highschool"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base"
                  value={formData.highschool}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm sm:text-base">Course Of Study</label>
                <select
                  name="course"
                  className="w-full border border-gray-300 rounded-lg p-2 bg-gray-200 cursor-not-allowed text-sm sm:text-base"
                  value={formData.course}
                  onChange={handleChange}
                  disabled
                >
                  <option value="Cybersecurity">Cybersecurity</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm sm:text-base">How did you hear about Morgan Technical Training?*</label>
                <textarea
                  name="feedback"
                  required
                  placeholder="...."
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base"
                  rows={3}
                  value={formData.feedback}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-center mb-4">
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base">
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

export default Cybersecurity;