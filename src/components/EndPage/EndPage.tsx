import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../context/GameContext';
import Header from '../Header/Header';
import TrollBridge from '../../Images/troll-bridge.png';
import './EndPage.scss';

interface EndPageProps {
  highScore: number;
  setHighScore: (score: number) => void;
  gamesPlayed: number;
  setGamesPlayed: (games: number) => void;
}

const EndPage: React.FC<EndPageProps> = ({ 
  highScore, 
  setHighScore, 
  gamesPlayed, 
  setGamesPlayed 
}) => {
  const { state, dispatch } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.score > highScore) {
      setHighScore(state.score);
    }
    setGamesPlayed(gamesPlayed + 1);
  }, [state.score, highScore, setHighScore, gamesPlayed, setGamesPlayed]);

  const backtoMainClick = () => {
    dispatch({ type: 'RESET_GAME' });
    navigate('/');
  };

  const playAgainClick = () => {
    dispatch({ type: 'RESET_GAME' });
    navigate('/main');
  };

  const getPerformanceMessage = () => {
    const percentage = (state.correctAnswers / state.questions.length) * 100;
    if (percentage === 100) return "Perfect! The Troll is impressed! 🏆";
    if (percentage >= 80) return "Excellent! You've earned the Troll's respect! 🌟";
    if (percentage >= 60) return "Good job! The Troll lets you pass! ✅";
    if (percentage >= 40) return "Not bad! The Troll is considering... 🤔";
    return "The Troll blocks your path! Try again! 🚫";
  };

  const isNewHighScore = state.score > 0 && state.score === highScore && gamesPlayed > 0;

  return (
    <div>
      <Header />
      <motion.div
        className="end-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={TrollBridge}
          alt="troll-bridge"
          className="troll-bridge"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.h4
          className="end-phrase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          You've completed all the questions!
        </motion.h4>
        
        <motion.div
          className="performance-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {getPerformanceMessage()}
        </motion.div>

        <motion.div
          className="score-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="score-item">
            <span className="score-label">Final Score:</span>
            <span className="score-value">{state.score}</span>
          </div>
          
          <div className="score-item">
            <span className="score-label">Correct Answers:</span>
            <span className="score-value">{state.correctAnswers}/{state.questions.length}</span>
          </div>
          
          <div className="score-item">
            <span className="score-label">Best Streak:</span>
            <span className="score-value">{state.streak}🔥</span>
          </div>
          
          <div className="score-item">
            <span className="score-label">High Score:</span>
            <span className="score-value">
              {highScore}
              {isNewHighScore && <span className="new-record">🎉 NEW!</span>}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="button-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            onClick={playAgainClick}
            className="play-again-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again
          </motion.button>
          
          <motion.button
            onClick={backtoMainClick}
            className="return-to-main"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Start
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EndPage;