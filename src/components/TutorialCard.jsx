import { motion } from 'framer-motion';
import { FaClock, FaSignal } from 'react-icons/fa';

export default function TutorialCard({ tutorial }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img 
        src={tutorial.imageUrl} 
        alt={tutorial.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            {tutorial.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <FaSignal className="mr-1" />
            <span>{tutorial.level}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{tutorial.title}</h3>
        <p className="text-gray-600 mb-4">{tutorial.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <FaClock className="mr-1" />
            <span>{tutorial.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}