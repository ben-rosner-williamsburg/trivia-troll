import QuestionCard from '../QuestionCard/QuestionCard';

const GamePage = ({
  questionInfo,
  questions,
  selectedDifficulty,
  setScore,
  setQuestions,
}: any) => {
  return (
    <main>
      <QuestionCard
        questionInfo={questionInfo}
        questions={questions}
        selectedDifficulty={selectedDifficulty}
        setScore={setScore}
        setQuestions={setQuestions}
      />
    </main>
  );
};

export default GamePage;
