import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './Navbar';
import { FaArrowLeft } from "react-icons/fa";


const blogPosts = [
  {
    id: 1,
    title: 'AI Integration in Modern Education',
    date: 'January 6, 2025',
    content: `Discover how AI is revolutionizing teaching methods, enabling personalized learning experiences, and shaping the future of education at our institution. 
              This blog dives deep into the latest tools and technologies being adopted in classrooms worldwide.`,
    image: 'https://img.sdcexec.com/files/base/acbm/scn/image/2024/11/AdobeStock_386294637__1_.672916ff44c27.png?auto=format%2Ccompress&q=70',
    additionalSections: [
      {
        heading: 'What is AI in Education?',
        text: `Artificial Intelligence in education refers to the application of AI technologies to improve teaching, learning, and administrative processes. Examples include adaptive learning platforms, AI tutoring systems, and automated grading tools.`,
      },
      {
        heading: 'Case Studies: AI in Action',
        text: `Institutions worldwide have adopted AI-driven tools like Duolingo for language learning, DreamBox for adaptive mathematics education, and IBM Watson for student mentoring.`,
      },
      {
        heading: 'Challenges and Ethical Concerns',
        text: `While AI offers significant benefits, challenges include data privacy issues, the risk of biased algorithms, and the digital divide impacting access to AI technologies.`,
      },
    ],
  },
  {
    id: 2,
    title: 'Alumni Success Stories: From Classroom to Boardroom',
    date: 'January 6, 2025',
    content: `Hear inspiring stories of our alumni who are now top developers. Their journey is a testament to the quality education we provide.`,
    image: 'https://therapyology.com/wp-content/uploads/2024/05/college-graduation-Featured-Image-1030x556.jpg',
    additionalSections: [
      // {
      //   heading: 'Notable Alumni Achievements',
      //   text: `Our graduates have excelled in various industries, including founding startups, leading Fortune 500 companies, and contributing to groundbreaking research.`,
      // },
      {
        heading: 'Alumni Networking Events',
        text: `We regularly host networking events and webinars that connect alumni with current students, fostering mentorship and collaboration.`,
      },
      {
        heading: 'How We Support Our Alumni',
        text: `Our institution provides continuous support to alumni through career counseling, advanced training programs, and exclusive access to industry conferences.`,
      },
    ],
  },
  {
    id: 3,
    title: 'Tech Talks: Innovations in Cybersecurity',
    date: 'January 7, 2025',
    content: `Our recent Tech Talk explored cutting-edge cybersecurity strategies and technologies. Stay ahead of the curve with insights from industry leaders.`,
    image: 'https://media.licdn.com/dms/image/D4E12AQGCHE6JUHM9CQ/article-cover_image-shrink_720_1280/0/1716536972384?e=2147483647&v=beta&t=h7PPPvY7XM0PFpaTaPKI-r4XC8K-5LqHygRC4s5pEtA',
    additionalSections: [
      {
        heading: 'Emerging Cyber Threats',
        text: `Experts highlighted the rise of AI-driven cyberattacks, ransomware evolution, and the challenges posed by quantum computing in cryptography.`,
      },
      {
        heading: 'Defensive Strategies for Businesses',
        text: `Strategies discussed included zero-trust architectures, regular penetration testing, and leveraging AI for real-time threat detection.`,
      },
      {
        heading: 'Looking Ahead: Future Trends',
        text: `Future innovations in cybersecurity are likely to include automated incident response systems, blockchain-based security solutions, and improved user awareness through gamified training.`,
      },
    ],
  },
];

const BlogDetails = () => {
    const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return <div className="text-center text-xl text-gray-700">Blog post not found.</div>;
  }

  return (
    <>
    <NavBar/>

    <div className="bg-gray-100 py-10 px-4 mt-10">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back to Blogs
        </button>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{blog.content}</p>
    
            {blog.additionalSections && (
              <div className="mt-8">
                {blog.additionalSections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.heading}</h2>
                    <p className="text-gray-700 leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    </div>
    </>

  );
};

export default BlogDetails;
