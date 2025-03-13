import { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Using react-icons for arrows

const ScrollButton = () => {
  const [showUpButton, setShowUpButton] = useState(false);
  const [showDownButton, setShowDownButton] = useState(true);

  // Check the scroll position to show or hide buttons
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setShowUpButton(scrollPosition > 100); 
      setShowDownButton(scrollPosition < windowHeight - 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll up or down functions
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-5 bottom-5 flex flex-col space-y-2 z-50">
      {showUpButton && (
        <button
          className="p-2 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700"
          onClick={scrollUp}
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
      {showDownButton && (
        <button
          className="p-2 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700"
          onClick={scrollDown}
          aria-label="Scroll to Bottom"
        >
          <FaArrowDown />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
