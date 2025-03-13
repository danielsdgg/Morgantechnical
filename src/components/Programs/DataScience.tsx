import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import emailjs from 'emailjs-com';
import ScrollButton from '../ScrollButton';

const DataScience: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    
    // Set visible to true after the component mounts
    setVisible(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null); // State for notification

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    highschool: '',
    course: 'Data Science',
    feedback: ''
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      highschool: '',
      course: 'Data Science',
      feedback: ''
    }); // Reset form data when closing the modal
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.send('service_7x3k6fq', 'template_fsx0o17', formData, 'hC6uNYFa9xlw96bvG')
      .then(() => {
        setNotification('Your application was submitted successfully!'); // Show success notification
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          gender: '',
          highschool: '',
          course: 'Data Science',
          feedback: ''
        });

        // Hide the notification after 5 seconds
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch((error) => {
        setNotification('Failed to send application. Please try again later.');
        console.error('EmailJS error:', error);

        // Hide the notification after 5 seconds
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
  };

  return (
    <>
      <NavBar />
      <div className={`bg-white text-gray-800 ${isModalOpen ? 'blur-lg' : ''}`}>
        {/* hero section */}
        <section className="relative bg-gray-800 h-[700px] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0">
          <img
          src="https://wallpapers.com/images/featured/data-science-xe1pmo7wm4jcokpd.jpg"
          alt="Hero Background"
          className={`object-cover w-full h-full transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
          }}/>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-4">
        <h1 className={`text-4xl md:text-5xl font-bold transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Data Science
        </h1>

        <p className={`text-md md:text-lg mb-8 transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'} delay-1000`}>
        Master data analytics, machine learning, and AI with industry experts
        </p>

        <button onClick={openModal} className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg">
          Apply Now
        </button>
      </div>
        </section>
          {/* ongoing intake */}
        <div className="w-full bg-blue-900 text-orange-400 py-16 px-4 text-center md:text-3xl sm:text-2xl text-1xl">
        <p>This Course is fully remote and applications are ongoing for the <b>March 2025</b> intake</p>
        </div>

        {/* What to Expect */}
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-semibold mb-8">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Foundations of Data Science</h3>
                        <p>
                            Learn the core concepts of data science, including statistics, data analysis, and visualization techniques.
                        </p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Hands-on Machine Learning</h3>
                        <p>
                            Build real-world projects using Python, TensorFlow, and scikit-learn to develop predictive models.
                        </p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Industry Expert Mentorship</h3>
                        <p>
                            Gain insights from experienced data scientists working in top tech companies and industries.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Course Necessities */}
        <div className="w-full bg-gray-300 py-16 px-16">
        <div className="max-w-[100%] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center text-black">
            <h2 className="text-4xl font-semibold mb-8">Course Necessities:</h2>
            <ul className="list-disc list-inside text-left space-y-2 text-1xl">
                <li>
                Applicants must have a stable internet connection with at least 10 Mbps download speed for online classes, coding exercises, and research.
                </li>
                <li>
                Basic proficiency in mathematics and statistics is recommended for understanding data analysis concepts.
                </li>
                <li>
                Students must commit to at least 20 hours per week of study time for projects, coding assignments, and self-study.
                </li>
                <li>
                Proficiency in written and spoken English is essential, as all course materials and instructions will be in English.
                </li>
                <li>
                Applicants must have access to essential tools such as Jupyter Notebook, Python, and data analysis libraries (e.g., Pandas, NumPy, Matplotlib).
                </li>
                <li>
                Must be willing to work on real-world datasets and collaborate with fellow students for group projects.
                </li>
                <li>
                Students are expected to uphold a professional and ethical approach when handling data and follow industry best practices.
                </li>
                <li>
                Regular attendance in live online or in-person classes is mandatory unless prior leave has been approved by the instructor.
                </li>
            </ul>
            </div>
            <img
            className="w-[700px] mx-auto rounded-3xl my-4"
            src="https://miro.medium.com/max/1400/1*PnHMFDWZitvKs4yAytMMPw.png"
            alt="Data Science"
            />
        </div>
        </div>
        {/* Course Content with Video */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-semibold mb-8">Course Content</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ul className="list-disc list-inside text-left space-y-2">
        <li>Python for Data Science</li>
        <li>Data Cleaning & Preprocessing</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Statistical Analysis & Hypothesis Testing</li>
        <li>Machine Learning Fundamentals</li>
        <li>Data Visualization with Matplotlib & Seaborn</li>
        <li>Big Data & Cloud Computing Basics</li>
        <li>Capstone Project & Portfolio Building</li>
      </ul>
      <div className="relative w-full h-0 pb-56">
        <video
          className="absolute top-0 left-0 w-full h-full border-4 border-gray-300"
          controls
          src="https://res.cloudinary.com/ddei3mzex/video/upload/v1729067344/Data_Science_Course_Intro.mp4"
        ></video>
      </div>
    </div>
  </div>
</section>
{/* Course duration & payment */}
<section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
          <div className="container mx-auto px-6 lg:px-12 text-center space-y-16">
            {/* Course Duration */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Course Duration</h2>
              <p className="text-lg md:text-xl text-gray-700">
                Our Data Science Course spans 25 weeks of intensive, hands-on training,
                preparing you to thrive in the tech industry.
              </p>
            </div>

            {/* Payment Plans */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Payment Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Full Payment</h3>
                  <p className="text-gray-600 mb-4">Pay upfront and enjoy a 10% discount.</p>
                  <p className="text-3xl font-bold text-gray-800">KSH 160,000</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Installment Plan</h3>
                  <p className="text-gray-600 mb-4">
                    Pay in 3 easy installments during the course period.
                  </p>
                  <p className="text-3xl font-bold text-gray-800">KSH 165,000</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Scholarship</h3>
                  <p className="text-gray-600 mb-4">
                    Scholarships are currently not available for this course.
                  </p>
                  <p className="text-3xl font-bold text-gray-800"></p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready to Join?</h2>
              <button onClick={openModal} className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-lg md:text-xl">
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
        &#10005;
      </button>

      {/* Notification Section */}
      {notification && (
        <div className="mb-4 p-4 text-center bg-green-100 text-green-800 rounded-lg">
          {notification}
        </div>
      )}

      <h2 className="text-2xl font-bold text-center mb-6">Application Form</h2>
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
      <option value="">Select a course</option>
      <option value="Data Science">Data Science</option>
      <option value="Cyber Security">Cyber Security</option>
      <option value="Frontend Programming">Frontend Programming</option>
      <option value="Backend Programming">Backend Programming</option>
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
    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
      Submit Application
    </button>
  </div>
</form>

    </div>
  </div>
)}
      <ScrollButton/>
      <Footer />
    </>
  );
};

export default DataScience;