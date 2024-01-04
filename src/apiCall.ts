import { Question } from './types';

export const getQuestions = async (
  selectedDifficulty: string,
): Promise<Question[]> => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&type=multiple&difficulty=${selectedDifficulty}`,
    );
    if (response.ok) {
      const data = await response.json();
      const decodedQuestions = data.results.map((result: any) => {
        const parser = new DOMParser();
        const decodedQuestion = parser.parseFromString(`<!doctype html><body>${result.question}`, 'text/html').body.textContent;
        const decodedCorrectAnswer = parser.parseFromString(`<!doctype html><body>${result.correct_answer}`, 'text/html').body.textContent;
        const decodedIncorrectAnswers = result.incorrect_answers.map((answer: string) => {
          return parser.parseFromString(`<!doctype html><body>${answer}`, 'text/html').body.textContent;
        });
        return {
          category: result.category,
          type: result.type,
          difficulty: result.difficulty,
          question: decodedQuestion,
          correctAnswer: decodedCorrectAnswer,
          incorrectAnswers: decodedIncorrectAnswers
        };
      }) as Question[];

      return decodedQuestions;
    } else if (response.status === 429) {
      throw new Error('Too many requests. Try again later.');
    } else {
      throw new Error('GET request failed!');
    }
  } catch (error) {
    console.error('ERROR:', error);
    throw error;
  }
};
