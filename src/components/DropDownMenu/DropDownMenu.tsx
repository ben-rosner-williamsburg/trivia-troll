import { useState } from 'react';
import "./DropDownMenu.scss"
const DropDownMenu = ({ setSelectedDifficulty }: any) => {
  // const [selectedDifficulty, setSelectedDifficulty] = useState('easy')

  const handleDifficultySelection = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedDifficulty(event.target.value);
  };

  return (
    <div>
      <label className="difficulty-label" htmlFor="difficulty-dropdown">Select Difficulty</label>
      <select id="difficulty-dropdown" onChange={handleDifficultySelection}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DropDownMenu;
