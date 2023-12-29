const QuestionCard = () => {
  return (
    <main>
      <h2>Question</h2>
      <label>
        <input
          type="radio"
          value="option1"
          // checked={selectedOption === 'option1'}
          // onChange ={handleInputChange}
        />
        <input
          type="radio"
          value="option2"
          // checked={selectedOption === 'option2'}
          // onChange ={handleInputChange}
        />
        <input
          type="radio"
          value="option3"
          // checked={selectedOption === 'option3'}
          // onChange ={handleInputChange}
        />
        <input
          type="radio"
          value="option4"
          // checked={selectedOption === 'option4'}
          // onChange ={handleInputChange}
        />
      </label>
    </main>
  );
};

export default QuestionCard;
