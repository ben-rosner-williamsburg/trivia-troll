import React from 'react';
import { motion } from 'framer-motion';
import './LoadingSpinner.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        🧙‍♂️
      </motion.div>
      <p className="loading-text">The Troll is preparing your questions...</p>
    </div>
  );
};

export default LoadingSpinner;