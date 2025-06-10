import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGame } from '../../context/GameContext';
import { useTimer } from '../../hooks/useTimer';
import Header from '../Header/Header';
import QuestionCard from '../QuestionCard/QuestionCard';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import Timer from '../Timer/Timer';
import ProgressBar from '../ProgressBar/ProgressBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './GamePage.scss';

interface GamePageProps {
  highScore: number;
  setHighScore: (score: number) => void;
}

const GamePage: React.FC<GamePageProps> = ({ highScore, setHighScore }) => {
  const { state, dispatch } = useGame();
  const navigate = useNavigate();

  const handleTimeUp = () => {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
      resetTimer(30);
    } else {
      dispatch({ type: 'COMPLETE_GAME' });
    }
  };

  const { timeLeft, resetTimer } = useTimer(
    30,
    handleTimeUp,
    state.gameStarted && !state.gameCompleted
  );

  useEffect(() => {
    dispatch({ type: 'SET_TIME', payload: timeLeft });
  }, [timeLeft, dispatch]);

  useEffect(() => {
    if (state.gameCompleted) {
      if (state.score > highScore) {
        setHighScore(state.score);
      }
      setTimeout(() => {
        navigate('/end');
      }, 1500);
    }
  }, [state.gameCompleted, state.score, highScore, setHighScore, navigate]);

  useEffect(() => {
    if (!state.gameStarted && state.questions.length === 0) {
      navigate('/main');
    }
  }, [state.gameStarted, state.questions.length, navigate]);

  if (state.isLoading) {
    return (
      <main className="game-page">
        <Header />
        <LoadingSpinner />
      </main>
    );
  }

  if (state.questions.length === 0) {
    return (
      <main className="game-page">
        <Header />
        <div className="no-questions">
          <p>No questions available. Please go back and try again.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="game-page">
      <Header />
      <motion.div
        className="game-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProgressBar 
          current={state.currentQuestionIndex} 
          total={state.questions.length} 
        />
        
        <ScoreDisplay
          score={state.score}
          streak={state.streak}
          correctAnswers={state.correctAnswers}
          totalQuestions={state.totalQuestionsAnswered}
        />
        
        <Timer timeLeft={timeLeft} totalTime={30} />
        
        <QuestionCard resetTimer={() => resetTimer(30)} />
      </motion.div>
    </main>
  );
};

export default GamePage;