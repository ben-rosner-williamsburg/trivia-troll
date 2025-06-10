import React from 'react';
import { motion } from 'framer-motion';
import './Timer.scss';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isLowTime = timeLeft <= 10;

  return (
    <div className="timer-container">
      <div className="timer-display">
        <motion.span
          className={`timer-text ${isLowTime ? 'timer-warning' : ''}`}
          animate={isLowTime ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, repeat: isLowTime ? Infinity : 0 }}
        >
          {timeLeft}s
        </motion.span>
      </div>
      <div className="timer-bar">
        <motion.div
          className={`timer-fill ${isLowTime ? 'timer-fill-warning' : ''}`}
          initial={{ width: '100%' }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Timer;