import React from 'react';
import { useNavigate } from 'react-router-dom';

const Portal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white p-6">
      {/* Back Arrow */}
      <div 
        className="absolute top-4 left-4 flex items-center cursor-pointer text-white hover:text-gray-200 transition"
        onClick={() => navigate('/')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="ml-2 font-semibold">Back to Home</span>
      </div>

      {/* Main Content */}
      <div className="max-w-xl text-center bg-white/20 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Portal</h1>
        <p className="text-lg sm:text-xl">
          Our learning management system is <span className="font-semibold underline">under construction</span>. 
          We’re working hard to bring you an exceptional learning experience. Stay tuned!
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Morgan Technical Training. All rights reserved.
      </footer>
    </div>
  );
};

export default Portal;
