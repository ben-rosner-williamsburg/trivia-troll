import QuestionCard from '../QuestionCard/QuestionCard';

const GamePage = ({ questionInfo, questions, selectedDifficulty }: any) => {
  return (
    <main>
<QuestionCard questionInfo={questionInfo} questions={questions} selectedDifficulty={selectedDifficulty} />
    </main>
  );
};

export default GamePage;