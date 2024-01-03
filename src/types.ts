export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export interface QuestionCardProps {
  questionInfo: any;
  questions: Question[];
  selectedDifficulty: any;
  setScore: (score: number) => void;
  setQuestions: (questions: Question[]) => void;
  increaseScore: () => void;
  handleScoreUpdate: () => void 
}
