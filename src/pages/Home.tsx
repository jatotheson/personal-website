import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center mt-20 space-y-10"
    >
      <h2 className="text-4xl font-semibold mb-4">
        Welcome to Jason Chung's Website!
      </h2>
      <p className="text-lg text-gray-600">
        Explore my work, skills, and background through this simple
        portfolio site.
      </p>
      <div className="h-[120vh] flex items-end justify-center">
        <p className="text-gray-400 mb-10">
          Scroll down to see the background color change
        </p>
      </div>
    </motion.div>
  );
}