import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cyber: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white p-8">
      {/* Back Arrow */}
      <div 
        className="absolute top-6 left-6 flex items-center cursor-pointer text-white hover:text-teal-200 transition-colors duration-300"
        onClick={() => navigate('/')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="ml-2 text-lg font-medium tracking-wide">Back to Home</span>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-teal-300/30">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
          Cyber Security Course
        </h1>
        <p className="text-xl sm:text-2xl leading-relaxed mb-6">
          Prepare for our <span className="font-bold text-teal-200">upcoming Cyber Security course</span>, 
          soon to be a cornerstone of our curriculum! Dive into the world of digital defense with training 
          in threat detection, ethical hacking, and system protection.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          Delivered <span className="font-semibold underline">fully remotely</span>, this course offers 
          flexible, expert-led instruction accessible from anywhere. Stay tuned for more details on the launch!
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm sm:text-base text-teal-100/80">
        © {new Date().getFullYear()} Morgan Technical Training. All rights reserved.
      </footer>
    </div>
  );
};

export default Cyber;