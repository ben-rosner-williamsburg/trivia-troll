export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};
// const questionInfo = {
//           category: triviaQuestion.category,
//           type: triviaQuestion.type,
//           difficulty: triviaQuestion.difficulty,
//           question: triviaQuestion.question,
//           correctAnswer: triviaQuestion.correct_answer,
//           incorrectAnswers: triviaQuestion.incorrect_answers
//         }