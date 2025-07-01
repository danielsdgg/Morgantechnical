import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NavBar from './Navbar';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Blogs = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    blogs: false,
    newsletter: false,
  });
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'AI Integration in Modern Education',
      date: 'January 6, 2025',
      content:
        'Discover how AI is revolutionizing teaching methods, enabling personalized learning experiences, and shaping the future of education at our institution.',
      image: 'https://img.sdcexec.com/files/base/acbm/scn/image/2024/11/AdobeStock_386294637__1_.672916ff44c27.png?auto=format%2Ccompress&q=70',
    },
    {
      id: 2,
      title: 'Alumni Success Stories: From Classroom to Boardroom',
      date: 'January 10, 2025',
      content:
        'Hear inspiring stories of our alumni who are now leading tech companies. Their journey is a testament to the quality education we provide.',
      image: 'https://therapyology.com/wp-content/uploads/2024/05/college-graduation-Featured-Image-1030x556.jpg',
    },
    {
      id: 3,
      title: 'Tech Talks: Innovations in Cybersecurity',
      date: 'January 14, 2025',
      content:
        'Our recent Tech Talk explored cutting-edge cybersecurity strategies and technologies. Stay ahead of the curve with insights from industry leaders.',
      image:
        'https://media.licdn.com/dms/image/D4E12AQGCHE6JUHM9CQ/article-cover_image-shrink_720_1280/0/1716536972384?e=2147483647&v=beta&t=h7PPPvY7XM0PFpaTaPKI-r4XC8K-5LqHygRC4s5pEtA',
    },
  ];

  const handleCardClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formcarry.com/s/-49z_wo5br3', {
        // Replace with your Formcarry endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to submit newsletter signup');

      setNotification('Thank you for subscribing!');
      setEmail('');

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } catch (error) {
      console.error('Formcarry error:', error);
      setNotification('Failed to subscribe. Please try again later.');
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  useEffect(() => {
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
      document.querySelector('#intro-section'),
      document.querySelector('#blogs-section'),
      document.querySelector('#newsletter-section'),
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Fallback: Ensure sections are visible after a delay
    const timer = setTimeout(() => {
      setVisibleSections({ intro: true, blogs: true, newsletter: true });
    }, 1500);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Morgan Technical Training</title>
        <meta
          name="description"
          content="Stay updated with Morgan Technical Training’s blog. Explore tech trends, alumni success stories, and insights from our Nairobi-based tech bootcamp."
        />
        <meta
          name="keywords"
          content="tech blog, Morgan Technical Training, AI in education, cybersecurity trends, alumni success, Nairobi tech bootcamp"
        />
      </Helmet>
      <NavBar />

      {/* Section 1: Intro */}
      <section
        id="intro-section"
        className={`mt-16 sm:mt-20 bg-gradient-to-b from-indigo-900 to-purple-900 py-16 sm:py-20 text-white transition-all duration-1000 ease-out ${
          visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter text-orange-400 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tech Insights & Updates
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-inter max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dive into the latest tech trends, alumni success stories, and updates from Morgan Technical Training. Stay informed and inspired with our blog.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Blog Posts */}
      <section
        id="blogs-section"
        className={`bg-gray-50 py-16 sm:py-20 transition-all duration-1000 ease-out ${
          visibleSections.blogs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12 text-center">
            Our Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onClick={() => handleCardClick(post.id)}
                role="article"
                aria-label={`Read blog post: ${post.title}`}
              >
                <img
                  src={post.image}
                  alt={`Image for blog post: ${post.title}`}
                  className="w-full h-48 object-cover rounded-t-2xl"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Blog+Image')}
                />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold font-inter text-indigo-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-inter mb-4">{post.date}</p>
                  <p className="text-gray-700 font-inter text-sm sm:text-base leading-relaxed">
                    {post.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Newsletter Signup */}
      <section
        id="newsletter-section"
        className={`bg-gradient-to-r from-indigo-50 to-purple-50 py-16 sm:py-20 transition-all duration-1000 ease-out ${
          visibleSections.newsletter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Stay in the Loop
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl font-inter text-gray-700 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Subscribe to our newsletter for the latest blog posts, tech insights, and updates from Morgan Technical Training.
          </motion.p>
          <motion.form
            onSubmit={handleNewsletterSubmit}
            className="max-w-md mx-auto bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {notification && (
              <motion.div
                className={`mb-4 p-4 text-center rounded-lg ${
                  notification.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {notification}
              </motion.div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter text-sm sm:text-base transition-all duration-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email for newsletter signup"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-inter font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </motion.form>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Blogs;