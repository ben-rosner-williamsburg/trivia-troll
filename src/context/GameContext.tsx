import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Question } from '../types';

interface GameState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  selectedDifficulty: string;
  gameStarted: boolean;
  gameCompleted: boolean;
  timeRemaining: number;
  streak: number;
  totalQuestionsAnswered: number;
  correctAnswers: number;
  isLoading: boolean;
  error: string | null;
}

type GameAction =
  | { type: 'SET_QUESTIONS'; payload: Question[] }
  | { type: 'SET_DIFFICULTY'; payload: string }
  | { type: 'START_GAME' }
  | { type: 'ANSWER_QUESTION'; payload: { correct: boolean } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'COMPLETE_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'SET_TIME'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: GameState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  selectedDifficulty: 'easy',
  gameStarted: false,
  gameCompleted: false,
  timeRemaining: 30,
  streak: 0,
  totalQuestionsAnswered: 0,
  correctAnswers: 0,
  isLoading: false,
  error: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload, isLoading: false };
    case 'SET_DIFFICULTY':
      return { ...state, selectedDifficulty: action.payload };
    case 'START_GAME':
      return { 
        ...state, 
        gameStarted: true, 
        gameCompleted: false,
        currentQuestionIndex: 0,
        score: 0,
        streak: 0,
        totalQuestionsAnswered: 0,
        correctAnswers: 0,
        timeRemaining: 30
      };
    case 'ANSWER_QUESTION':
      const newStreak = action.payload.correct ? state.streak + 1 : 0;
      const newScore = action.payload.correct ? state.score + (10 + newStreak * 2) : state.score;
      return {
        ...state,
        score: newScore,
        streak: newStreak,
        totalQuestionsAnswered: state.totalQuestionsAnswered + 1,
        correctAnswers: action.payload.correct ? state.correctAnswers + 1 : state.correctAnswers,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        timeRemaining: 30,
      };
    case 'COMPLETE_GAME':
      return { ...state, gameCompleted: true, gameStarted: false };
    case 'RESET_GAME':
      return { ...initialState, selectedDifficulty: state.selectedDifficulty };
    case 'SET_TIME':
      return { ...state, timeRemaining: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};