import QuestionCard from '../QuestionCard/QuestionCard';

const GamePage = ({
  questionInfo,
  questions,
  selectedDifficulty,
  setScore,
}: any) => {
  return (
    <main>
      <QuestionCard
        questionInfo={questionInfo}
        questions={questions}
        selectedDifficulty={selectedDifficulty}
        setScore={setScore}
      />
    </main>
  );
};

export default GamePage;
