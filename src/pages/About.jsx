import { motion } from 'framer-motion';
import { FaCamera, FaHeart, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About PhotoBlog</h1>
        <p className="text-xl text-gray-600">Sharing the world through our lens</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-6"
        >
          <FaCamera className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">Capturing life's beautiful moments one frame at a time</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center p-6"
        >
          <FaHeart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Passion</h3>
          <p className="text-gray-600">Dedicated to the art of photography and storytelling</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center p-6"
        >
          <FaGlobe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
          <p className="text-gray-600">Sharing stories with photography enthusiasts worldwide</p>
        </motion.div>
      </div>
    </div>
  );
}