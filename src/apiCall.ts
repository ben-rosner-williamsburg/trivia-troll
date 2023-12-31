import { Question } from './types';

export const getQuestions = async (
  selectedDifficulty: string,
): Promise<Question[]> => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${selectedDifficulty}`,
    );
    if (response.ok) {
      const data = await response.json();
      return data.results.map((result: any) => ({
        category: result.category,
        type: result.type,
        difficulty: result.difficulty,
        question: result.question,
        correctAnswer: result.correct_answer,
        incorrectAnswers: result.incorrect_answers,
      })) as Question[];
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
