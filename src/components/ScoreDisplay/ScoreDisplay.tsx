import React from 'react';
import { motion } from 'framer-motion';
import './ScoreDisplay.scss';

interface ScoreDisplayProps {
  score: number;
  streak: number;
  correctAnswers: number;
  totalQuestions: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  streak,
  correctAnswers,
  totalQuestions,
}) => {
  return (
    <div className="score-display">
      <motion.div
        className="score-item"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="score-label">Score:</span>
        <span className="score-value">{score}</span>
      </motion.div>
      
      {streak > 0 && (
        <motion.div
          className="score-item streak"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="score-label">Streak:</span>
          <span className="score-value">{streak}🔥</span>
        </motion.div>
      )}
      
      <div className="score-item">
        <span className="score-label">Correct:</span>
        <span className="score-value">{correctAnswers}/{totalQuestions}</span>
      </div>
    </div>
  );
};

export default ScoreDisplay;