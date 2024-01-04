import './QuestionCard.scss'
import { QuestionCardProps } from '../../types';
import arrayShuffle from 'array-shuffle';
import { useState, useEffect } from 'react';
import { getQuestions } from '../../apiCall';

const QuestionCard = ({
  questions,
  selectedDifficulty,
  setQuestions,
  increaseScore,
  handleScoreUpdate,
}: QuestionCardProps) => {
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const shuffleAnswers = (
    correctAnswer: string,
    incorrect_answers: string[],
  ) => {
    const answers = [correctAnswer, ...incorrect_answers];
    return arrayShuffle(answers);
  };

  useEffect(() => {
    if (questionIndex === 5) {
      setShowButton(false);
    }
  }, [questionIndex]);

  const handleAnswerClick = (answer: string, correctAnswer: string) => {
    setCorrectAnswer(correctAnswer);
    setShowCorrectAnswer(true);
    setShowButton(true);

    if (answer === correctAnswer) {
      increaseScore();
    }
    handleScoreUpdate();
  };

  const handleButtonClick = async () => {
    try {
      if (questionIndex >= questions.length) {
        const newQuestions = await getQuestions(selectedDifficulty);
        if (newQuestions && newQuestions.length > 0) {
          setQuestions(newQuestions);
          setQuestionIndex(questionIndex + 1);
          setShowCorrectAnswer(false); 
          setShowButton(false);
        }
      } else {
        setQuestionIndex(questionIndex + 1);
        setShowCorrectAnswer(false); 
        setShowButton(false);
      }
    } catch (error) {
      console.error('Error fetching new question:', error);
    }
  };

  return (
    <main className="question-card">
      {questions.length > 0 && questionIndex < questions.length && (
        <div key={questionIndex}>
          <h2>{questions[questionIndex].question}</h2>
          {shuffleAnswers(
            questions[questionIndex].correctAnswer,
            questions[questionIndex].incorrectAnswers,
          ).map((answer, idx) => (
            <button
              className='answer-buttons'
              key={idx}
              onClick={() =>
                handleAnswerClick(
                  answer,
                  questions[questionIndex].correctAnswer,
                )
              }
            >
              {answer}
            </button>
          ))}
          {showCorrectAnswer && (
            <div>
              <p>Correct Answer: {correctAnswer}</p>
              {showButton && (
                <button
                  className="next-question-btn"
                  onClick={handleButtonClick}
                >
                  Next Question
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default QuestionCard;
