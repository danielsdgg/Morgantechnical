import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar';

const Blogs = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'AI Integration in Modern Education',
      date: 'January 6, 2025',
      content: 'Discover how AI is revolutionizing teaching methods, enabling personalized learning experiences, and shaping the future of education at our institution.',
      image: 'https://img.sdcexec.com/files/base/acbm/scn/image/2024/11/AdobeStock_386294637__1_.672916ff44c27.png?auto=format%2Ccompress&q=70',
    },
    {
      id: 2,
      title: 'Alumni Success Stories: From Classroom to Boardroom',
      date: 'January 6, 2025',
      content: 'Hear inspiring stories of our alumni who are now leading tech companies globally. Their journey is a testament to the quality education we provide.',
      image: 'https://therapyology.com/wp-content/uploads/2024/05/college-graduation-Featured-Image-1030x556.jpg',
    },
    {
      id: 3,
      title: 'Tech Talks: Innovations in Cybersecurity',
      date: 'January 7, 2025',
      content: 'Our recent Tech Talk explored cutting-edge cybersecurity strategies and technologies. Stay ahead of the curve with insights from industry leaders.',
      image: 'https://media.licdn.com/dms/image/D4E12AQGCHE6JUHM9CQ/article-cover_image-shrink_720_1280/0/1716536972384?e=2147483647&v=beta&t=h7PPPvY7XM0PFpaTaPKI-r4XC8K-5LqHygRC4s5pEtA',
    },
  ];

  const handleCardClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
    <NavBar/>
    <div className="bg-gray-100 py-10 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News & Feedback</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(post.id)}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </>
  );
};

export default Blogs;
