import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogoPage from '../LogoPage/LogoPage';
import MainPage from '../MainPage/MainPage';
import GamePage from '../GamePage/GamePage';
import EndPage from '../EndPage/EndPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Question } from '../../types';
import { getQuestions } from '../../apiCall';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [score, setScore] = useState<number>(0);

  const fetchData = async () => {
    try {
      const data = await getQuestions(selectedDifficulty);
      setQuestions(data);
    } catch (error) {
      console.error('ERROR:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route
          path="/main"
          element={<MainPage setSelectedDifficulty={setSelectedDifficulty} />}
        />
        <Route
          path="/game"
          element={
            <GamePage
              questions={questions}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route path="/end" element={<EndPage score={score} />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
