import React from 'react';
import Home from './components/Home';
import Story from './components/About/Story';
import Team from './components/About/Team';
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter
import Contact from './components/Contact';
import Courses from './components/Courses';
import Forms from './components/Forms';
import Portal from './components/Portal';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';
import Software from './components/Programs/Software';

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;