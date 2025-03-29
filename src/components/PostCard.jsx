import { motion } from 'framer-motion';

export default function PostCard({ post }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="text-sm text-indigo-600">{post.category}</span>
        </div>
      </div>
    </motion.div>
  );
}