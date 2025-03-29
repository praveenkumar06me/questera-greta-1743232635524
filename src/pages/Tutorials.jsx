import { useState } from 'react';
import { motion } from 'framer-motion';
import TutorialCard from '../components/TutorialCard';
import LessonContent from '../components/LessonContent';

const tutorials = [
  {
    id: 1,
    title: "Understanding Manual Mode",
    description: "Master the fundamentals of manual camera settings for perfect exposure.",
    imageUrl: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848",
    category: "Basics",
    level: "Beginner",
    duration: "45 mins",
    content: [
      {
        title: "The Exposure Triangle",
        text: "Learn how aperture, shutter speed, and ISO work together to create the perfect exposure.",
        tips: [
          "Start with aperture priority mode to understand depth of field",
          "Use the sunny 16 rule as a starting point",
          "Practice changing settings without looking at your camera"
        ]
      },
      {
        title: "Understanding Aperture",
        text: "Control depth of field and light intake with this crucial setting.",
        tips: [
          "Lower f-numbers create more background blur",
          "Higher f-numbers are great for landscape photography",
          "Sweet spot is usually 2-3 stops from wide open"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Composition Techniques",
    description: "Learn essential composition rules to create stunning photographs.",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    category: "Composition",
    level: "Intermediate",
    duration: "60 mins",
    content: [
      {
        title: "Rule of Thirds",
        text: "Place key elements along the intersecting lines to create balanced compositions.",
        tips: [
          "Use your camera's grid overlay",
          "Practice with both horizontal and vertical compositions",
          "Don't be afraid to break the rule when it feels right"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Lighting Mastery",
    description: "Master natural and artificial lighting for professional results.",
    imageUrl: "https://images.unsplash.com/photo-1429552077091-836152271555",
    category: "Lighting",
    level: "Advanced",
    duration: "90 mins",
    content: [
      {
        title: "Natural Light",
        text: "Learn to work with available light in any situation.",
        tips: [
          "Golden hour provides the best natural lighting",
          "Use reflectors to fill shadows",
          "Overcast days are perfect for portraits"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Portrait Photography",
    description: "Create stunning portraits with proper lighting and posing.",
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
    category: "Portraits",
    level: "Intermediate",
    duration: "75 mins",
    content: [
      {
        title: "Portrait Basics",
        text: "Learn fundamental techniques for capturing stunning portraits.",
        tips: [
          "Focus on the eyes",
          "Use a longer focal length for flattering perspectives",
          "Communication is key for natural expressions"
        ]
      }
    ]
  }
];

export default function Tutorials() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {selectedLesson ? (
        <>
          <button
            onClick={() => setSelectedLesson(null)}
            className="mx-auto max-w-4xl px-4 block mb-4 text-indigo-600 hover:text-indigo-800"
          >
            ← Back to Tutorials
          </button>
          <LessonContent lesson={selectedLesson} />
        </>
      ) : (
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800 mb-8 text-center"
          >
            Photography Tutorials
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map(tutorial => (
              <div key={tutorial.id} onClick={() => setSelectedLesson(tutorial)}>
                <TutorialCard tutorial={tutorial} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}