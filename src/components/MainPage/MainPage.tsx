import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGame } from '../../context/GameContext';
import { getQuestions } from '../../apiCall';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Header from '../Header/Header';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './MainPage.scss';

const MainPage: React.FC = () => {
  const { state, dispatch } = useGame();

  const handlePlayGame = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const questions = await getQuestions(state.selectedDifficulty);
      dispatch({ type: 'SET_QUESTIONS', payload: questions });
      dispatch({ type: 'START_GAME' });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load questions. Please try again.' });
    }
  };

  if (state.isLoading) {
    return (
      <main className="main-page">
        <Header />
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main className="main-page">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Enter the Trivia Troll's Lair if You Dare!</h3>
        
        {state.error && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            role="alert"
          >
            {state.error}
          </motion.div>
        )}
        
        <div className="choose-and-play-menu">
          <DropDownMenu />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="go-play" to="/game">
              <button 
                className="play-btn"
                onClick={handlePlayGame}
                aria-label={`Start trivia game on ${state.selectedDifficulty} difficulty`}
              >
                Play Game
              </button>
            </Link>
          </motion.div>
          
          <div className="difficulty-info">
            <p>Selected Difficulty: <strong>{state.selectedDifficulty.toUpperCase()}</strong></p>
            <div className="difficulty-description">
              {state.selectedDifficulty === 'easy' && '🟢 Perfect for beginners'}
              {state.selectedDifficulty === 'medium' && '🟡 A good challenge'}
              {state.selectedDifficulty === 'hard' && '🔴 For trivia masters'}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default MainPage;