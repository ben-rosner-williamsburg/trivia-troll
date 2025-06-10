import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../../context/GameContext';
import "./DropDownMenu.scss";

const DropDownMenu: React.FC = () => {
  const { state, dispatch } = useGame();

  const handleDifficultySelection = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch({ type: 'SET_DIFFICULTY', payload: event.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="dropdown-container"
    >
      <label 
        className="difficulty-label" 
        htmlFor="difficulty-dropdown"
      >
        Select Difficulty
      </label>
      <select 
        id="difficulty-dropdown" 
        value={state.selectedDifficulty}
        onChange={handleDifficultySelection}
        aria-describedby="difficulty-description"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </motion.div>
  );
};

export default DropDownMenu;