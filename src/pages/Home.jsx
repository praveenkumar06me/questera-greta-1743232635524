import { motion } from 'framer-motion';
import PostCard from '../components/PostCard';

const posts = [
  {
    id: 1,
    title: "Morning Light in the Forest",
    excerpt: "Capturing the ethereal morning light filtering through the ancient forest canopy.",
    imageUrl: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
    date: "March 15, 2024",
    category: "Nature"
  },
  {
    id: 2,
    title: "Urban Architecture",
    excerpt: "Modern architectural marvels that shape our city skylines.",
    imageUrl: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5",
    date: "March 14, 2024",
    category: "Urban"
  },
  {
    id: 3,
    title: "Coastal Serenity",
    excerpt: "The peaceful moments where ocean meets shore.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    date: "March 13, 2024",
    category: "Landscape"
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 mb-8 text-center"
      >
        Welcome to PhotoBlog
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}