export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export interface QuestionCardProps {
  questionInfo: Question;
  questions: Question[];
}