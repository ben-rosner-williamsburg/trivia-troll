import './GamePage.scss';
import QuestionCard from '../QuestionCard/QuestionCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const GamePage = ({
  questionInfo,
  questions,
  selectedDifficulty,
  setScore,
  setQuestions,
}: any) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);

  const navigate = useNavigate();

  const increaseScore = () => {
    setScore((prevScore: number) => {
      const newScore = prevScore + 1;
      console.log('New Score:', newScore);
      return newScore;
    });
  };

  const handleScoreUpdate = () => {
    setAnsweredQuestions((prevCount: number) => prevCount + 1);
  };

  if (answeredQuestions === 5) {
    setTimeout(() => {
      navigate('/end');
    }, 1500);
  }

  return (
    <main className="game-page">
      <Header />
      <QuestionCard
        questionInfo={questionInfo}
        questions={questions}
        selectedDifficulty={selectedDifficulty}
        setScore={setScore}
        setQuestions={setQuestions}
        increaseScore={increaseScore}
        handleScoreUpdate={handleScoreUpdate}
      />
    </main>
  );
};

export default GamePage;
