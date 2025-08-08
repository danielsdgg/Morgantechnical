import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import Story from './components/About/Story';
// import Contact from './components/Contact';
// import Courses from './components/Courses';
// import Forms from './components/Forms';
// import Blogs from './components/Blogs';
// import BlogDetails from './components/BlogDetails';
// import Software from './components/Programs/Software';
// import Cyber from './components/Programs/Cyber';
// import Dataa from './components/Programs/Dataa';

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]); 

  return null; // This component doesn’t render anything
};

function App() {
  return (
    <div className="App">
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 m-4 rounded-lg shadow-md">
  <h2 className="text-xl text-center font-bold text-blue-800 mb-2">
    Morgan Technical Training
  </h2>
  <p className="text-gray-700 text-center text-lg">
    Visit our 
    <a
      href="https://morgantechnicaltraining.co.ke"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:text-blue-900 mx-1 underline font-semibold"
    >
      new website
    </a>
    for top-tier technical training courses.
  </p>
</div>
      <ScrollToTop /> {/* Handles scroll behavior */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Story />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/software" element={<Software />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/dataa" element={<Dataa />} />
      </Routes> */}
    </div>
  );
}

export default App;