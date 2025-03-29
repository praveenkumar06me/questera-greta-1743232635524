import { motion } from 'framer-motion';

export default function LessonContent({ lesson }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <img 
        src={lesson.imageUrl} 
        alt={lesson.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
      />
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{lesson.title}</h1>
      
      <div className="prose max-w-none">
        {lesson.content.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.text}</p>
            {section.tips && (
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">Pro Tips:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {section.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}