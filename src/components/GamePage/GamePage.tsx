import QuestionCard from '../QuestionCard/QuestionCard';

const GamePage = ({ questionInfo, questions }: any) => {
  return (
    <main>
      <QuestionCard questionInfo={questionInfo} questions={questions} />
    </main>
  );
};

export default GamePage;