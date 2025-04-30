import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NavBar from './Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'AI Integration in Modern Education',
    date: 'January 6, 2025',
    content:
      'Discover how AI is revolutionizing teaching methods, enabling personalized learning experiences, and shaping the future of education at our institution. This blog dives deep into the latest tools and technologies being adopted in classrooms worldwide.',
    image:
      'https://img.sdcexec.com/files/base/acbm/scn/image/2024/11/AdobeStock_386294637__1_.672916ff44c27.png?auto=format%2Ccompress&q=70',
    additionalSections: [
      {
        heading: 'What is AI in Education?',
        text: 'Artificial Intelligence in education refers to the application of AI technologies to improve teaching, learning, and administrative processes. Examples include adaptive learning platforms, AI tutoring systems, and automated grading tools.',
      },
      {
        heading: 'Case Studies: AI in Action',
        text: 'Institutions worldwide have adopted AI-driven tools like Duolingo for language learning, DreamBox for adaptive mathematics education, and IBM Watson for student mentoring.',
      },
      {
        heading: 'Challenges and Ethical Concerns',
        text: 'While AI offers significant benefits, challenges include data privacy issues, the risk of biased algorithms, and the digital divide impacting access to AI technologies.',
      },
    ],
  },
  {
    id: 2,
    title: 'Alumni Success Stories: From Classroom to Boardroom',
    date: 'January 10, 2025',
    content:
      'Hear inspiring stories of our alumni who are now leading tech companies. Their journey is a testament to the quality education we provide.',
    image: 'https://therapyology.com/wp-content/uploads/2024/05/college-graduation-Featured-Image-1030x556.jpg',
    additionalSections: [
      {
        heading: 'Notable Alumni Achievements',
        text: 'Our graduates have launched innovative startups, secured leadership roles at global tech firms, and contributed to cutting-edge projects in AI and cybersecurity.',
      },
      {
        heading: 'Alumni Networking Events',
        text: 'We regularly host networking events and webinars that connect alumni with current students, fostering mentorship and collaboration.',
      },
      {
        heading: 'How We Support Our Alumni',
        text: 'Our institution provides continuous support to alumni through career counseling, advanced training programs, and exclusive access to industry conferences.',
      },
    ],
  },
  {
    id: 3,
    title: 'Tech Talks: Innovations in Cybersecurity',
    date: 'January 14, 2025',
    content:
      'Our recent Tech Talk explored cutting-edge cybersecurity strategies and technologies. Stay ahead of the curve with insights from industry leaders.',
    image:
      'https://media.licdn.com/dms/image/D4E12AQGCHE6JUHM9CQ/article-cover_image-shrink_720_1280/0/1716536972384?e=2147483647&v=beta&t=h7PPPvY7XM0PFpaTaPKI-r4XC8K-5LqHygRC4s5pEtA',
    additionalSections: [
      {
        heading: 'Emerging Cyber Threats',
        text: 'Experts highlighted the rise of AI-driven cyberattacks, ransomware evolution, and the challenges posed by quantum computing in cryptography.',
      },
      {
        heading: 'Defensive Strategies for Businesses',
        text: 'Strategies discussed included zero-trust architectures, regular penetration testing, and leveraging AI for real-time threat detection.',
      },
      {
        heading: 'Key Takeaways from the Tech Talk',
        text: 'Speakers emphasized the need for proactive training, real-world simulations, and staying updated on AI-driven security solutions to combat evolving threats.',
      },
    ],
  },
];

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const blog = blogPosts.find((post) => post.id === Number(id));
  const [visibleSections, setVisibleSections] = useState({
    details: false,
    related: false,
    sharing: false,
  });

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
      document.querySelector('#details-section'),
      document.querySelector('#related-section'),
      document.querySelector('#sharing-section'),
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Fallback: Ensure sections are visible after a delay
    const timer = setTimeout(() => {
      setVisibleSections({ details: true, related: true, sharing: true });
    }, 1500);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      clearTimeout(timer);
    };
  }, []);

  if (!blog) {
    return (
      <div className="text-center text-xl text-gray-700 font-inter py-20">Blog post not found.</div>
    );
  }

  const relatedPosts = blogPosts.filter((post) => post.id !== Number(id)).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{`${blog.title} | Morgan Technical Training`}</title>
        <meta
          name="description"
          content={`${blog.content.substring(0, 150)}... Explore tech insights, alumni stories, and more at Morgan Technical Training's blog.`}
        />
        <meta
          name="keywords"
          content={`Morgan Technical Training, ${blog.title.toLowerCase()}, tech blog, Nairobi tech bootcamp, AI education, cybersecurity trends, alumni success`}
        />
      </Helmet>
      <NavBar />

      {/* Section 1: Blog Post Details */}
      <section
        id="details-section"
        className={`mt-16 sm:mt-20 bg-gray-50 py-16 sm:py-20 px-4 transition-all duration-1000 ease-out ${
          visibleSections.details ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-inter font-semibold text-sm sm:text-base mb-6 hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            aria-label="Back to Blogs page"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blogs
          </motion.button>
          <motion.div
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={blog.image}
              alt={`Featured image for blog post: ${blog.title}`}
              className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Blog+Image')}
            />
            <div className="p-6 sm:p-8">
              <motion.h1
                className="text-3xl sm:text-4xl font-bold font-inter text-indigo-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {blog.title}
              </motion.h1>
              <motion.p
                className="text-sm text-gray-500 font-inter mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {blog.date}
              </motion.p>
              <motion.p
                className="text-gray-700 font-inter text-base sm:text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {blog.content}
              </motion.p>

              {blog.additionalSections && (
                <div className="mt-8">
                  {blog.additionalSections.map((section, index) => (
                    <motion.div
                      key={index}
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    >
                      <h2 className="text-2xl sm:text-3xl font-semibold font-inter text-orange-400 mb-3">
                        {section.heading}
                      </h2>
                      <p className="text-gray-700 font-inter text-base sm:text-lg leading-relaxed">
                        {section.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Related Posts */}
      <section
        id="related-section"
        className={`bg-gradient-to-r from-indigo-50 to-purple-50 py-16 sm:py-20 transition-all duration-1000 ease-out ${
          visibleSections.related ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-indigo-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore More Posts
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/20 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onClick={() => navigate(`/blog/${post.id}`)}
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
                    {post.content.substring(0, 100)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Social Sharing */}
      <section
        id="sharing-section"
        className={`bg-gray-50 py-12 sm:py-16 transition-all duration-1000 ease-out ${
          visibleSections.sharing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold font-inter text-indigo-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Share This Post
          </motion.h2>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href={`https://x.com/share?url=${encodeURIComponent(
                `${window.location.origin}/blog/${blog.id}`
              )}&text=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-inter font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
              aria-label="Share this blog post on X"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                `${window.location.origin}/blog/${blog.id}`
              )}&title=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-inter font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300"
              aria-label="Share this blog post on LinkedIn"
            >
              Share on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;