import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HappyTroll from '../../Images/HappyTroll.png';
import './LogoPage.scss';

const LogoPage: React.FC = () => {
  return (
    <main className="logo-page">
      <div className="wrapper-container">
        <motion.div
          className="image-wrapper"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={HappyTroll}
            alt="Happy troll mascot"
            className="happy-troll-logo-page"
          />
        </motion.div>
        
        <div className="text-wrapper">
          <motion.h1
            className="trivia-troll-logo-title"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Trivia Troll
          </motion.h1>
          
          <motion.p
            className="app-description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Answer Questions to pass the Troll's bridge!
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/main">
              <button 
                className="enter-game-btn"
                aria-label="Enter the trivia game"
              >
                Enter
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default LogoPage;