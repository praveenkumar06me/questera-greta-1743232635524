import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryFilter from '../components/GalleryFilter';
import ImageModal from '../components/ImageModal';

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Mountain Vista",
    category: "Landscape",
    description: "Majestic mountain range captured during golden hour"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Forest Path",
    category: "Nature",
    description: "A serene path through an ancient forest"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Sunset Lake",
    category: "Landscape",
    description: "Peaceful lake reflection during sunset"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Foggy Morning",
    category: "Nature",
    description: "Mystical morning fog in the wilderness"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    title: "Forest Canopy",
    category: "Nature",
    description: "Looking up at the forest canopy"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Beach Sunrise",
    category: "Seascape",
    description: "Beautiful sunrise over a tropical beach"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain Lake",
    category: "Landscape",
    description: "Pristine mountain lake surrounded by peaks"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
    title: "Autumn Forest",
    category: "Nature",
    description: "Vibrant autumn colors in a dense forest"
  }
];

const categories = [...new Set(images.map(img => img.category))];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory);

  const handleNext = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextImage = images[(currentIndex + 1) % images.length];
    setSelectedImage(nextImage);
  };

  const handlePrev = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevImage = images[(currentIndex - 1 + images.length) % images.length];
    setSelectedImage(prevImage);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 mb-8 text-center"
      >
        Photo Gallery
      </motion.h1>

      <GalleryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white font-semibold">{image.title}</h3>
                <span className="text-gray-200 text-sm">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}