import { QuestionCardProps } from '../../types';
import arrayShuffle from 'array-shuffle';
import { useState } from 'react'
import { getQuestions } from '../../apiCall'

interface Props extends QuestionCardProps {
  selectedDifficulty: string;
}

const QuestionCard = ({ questions, selectedDifficulty }: Props) => {
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);


  const shuffleAnswers = (
    correctAnswer: string,
    incorrect_answers: string[],
  ) => {
    const answers = [correctAnswer, ...incorrect_answers];
    return arrayShuffle(answers);
  };

  const handleAnswerClick = (answer: string, correctAnswer: string) => {
    setCorrectAnswer(correctAnswer);
    setShowCorrectAnswer(true);
    setShowButton(true);
  }

  const handleButtonClick = async () => {
    try {
      const newQuestions = await getQuestions(selectedDifficulty);

      // Assuming getQuestions returns an array with one question
      if (newQuestions && newQuestions.length > 0) {
        setCorrectAnswer('');
        setShowCorrectAnswer(false);
        setShowButton(false);
        // Assuming you're updating the existing questions state
        // This might vary based on your application's logic
        // Set the new question to the state
        // setQuestions(newQuestions);
      }
    } catch (error) {
      console.error('Error fetching new question:', error);
    }
  };


  return (
    <main>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          {shuffleAnswers(
            question.correctAnswer,
            question.incorrectAnswers,
          ).map((answer, idx) => (
            <button
              key={idx}
              onClick={() =>
                handleAnswerClick(answer, question.correctAnswer)
              }
            >
              {answer}
            </button>
          ))}
            {showCorrectAnswer && (
            <div>
              <p>Correct Answer: {correctAnswer}</p>
              {showButton && (
                <button className="next-question-btn" onClick={handleButtonClick}>Next Question</button>
              )}
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default QuestionCard;