import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ImageModal({ image, onClose, onNext, onPrev }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="relative max-w-7xl mx-auto px-4" onClick={e => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <FaTimes className="w-6 h-6" />
          </button>
          
          <div className="flex items-center justify-between">
            <button
              onClick={onPrev}
              className="text-white hover:text-gray-300 p-2"
            >
              <FaChevronLeft className="w-8 h-8" />
            </button>
            
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={image.url}
              alt={image.title}
              className="max-h-[80vh] object-contain"
            />
            
            <button
              onClick={onNext}
              className="text-white hover:text-gray-300 p-2"
            >
              <FaChevronRight className="w-8 h-8" />
            </button>
          </div>
          
          <div className="text-center mt-4">
            <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            <p className="text-gray-300 mt-2">{image.description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}