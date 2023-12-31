import { QuestionCardProps } from '../../types';
import arrayShuffle from 'array-shuffle';

const QuestionCard = ({ questions }: QuestionCardProps) => {
  const shuffleAnswers = (
    correctAnswer: string,
    incorrect_answers: string[],
  ) => {
    const answers = [correctAnswer, ...incorrect_answers];
    return arrayShuffle(answers);
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
            <button key={idx}>{answer}</button>
          ))}
        </div>
      ))}
    </main>
  );
};

export default QuestionCard;