import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../../context/GameContext';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import arrayShuffle from 'array-shuffle';
import './QuestionCard.scss';

interface QuestionCardProps {
  resetTimer: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ resetTimer }) => {
  const { state, dispatch } = useGame();
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = state.questions[state.currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      const answers = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers];
      setShuffledAnswers(arrayShuffle(answers));
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentQuestion, state.currentQuestionIndex]);

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    dispatch({ type: 'ANSWER_QUESTION', payload: { correct } });

    setTimeout(() => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        dispatch({ type: 'NEXT_QUESTION' });
        resetTimer();
      } else {
        dispatch({ type: 'COMPLETE_GAME' });
      }
    }, 2000);
  };

  if (!currentQuestion) {
    return <div>Loading question...</div>;
  }

  return (
    <motion.div
      className="question-card"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CategoryBadge category={currentQuestion.category} />
      
      <motion.h2
        className="question-text"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {currentQuestion.question}
      </motion.h2>

      <div className="answers-grid">
        <AnimatePresence>
          {shuffledAnswers.map((answer, index) => {
            let buttonClass = 'answer-button';
            
            if (showResult) {
              if (answer === currentQuestion.correctAnswer) {
                buttonClass += ' correct';
              } else if (answer === selectedAnswer) {
                buttonClass += ' incorrect';
              } else {
                buttonClass += ' disabled';
              }
            }

            return (
              <motion.button
                key={`${state.currentQuestionIndex}-${index}`}
                className={buttonClass}
                onClick={() => handleAnswerClick(answer)}
                disabled={!!selectedAnswer}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={!selectedAnswer ? { scale: 1.02 } : {}}
                whileTap={!selectedAnswer ? { scale: 0.98 } : {}}
                aria-label={`Answer option: ${answer}`}
              >
                <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                <span className="answer-text">{answer}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {isCorrect ? (
              <>
                <span className="result-icon">🎉</span>
                <span>Correct! Well done!</span>
                {state.streak > 1 && <span className="streak-bonus">+{state.streak * 2} streak bonus!</span>}
              </>
            ) : (
              <>
                <span className="result-icon">😔</span>
                <span>Incorrect. The answer was: {currentQuestion.correctAnswer}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionCard;