import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Story from './components/About/Story';
import Team from './components/About/Team';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Forms from './components/Forms';
import Portal from './components/Portal';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';
import Software from './components/Programs/Software';
import DataScience from './components/Programs/DataScience';
import Cyber from './components/Programs/Cyber';

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
      <ScrollToTop /> {/* Handles scroll behavior */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
        <Route path="/team" element={<Team />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/software" element={<Software />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cyber" element={<Cyber />} />
      </Routes>
    </div>
  );
}

export default App;