import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LogoPage from '../LogoPage/LogoPage';
import MainPage from '../MainPage/MainPage';
import GamePage from '../GamePage/GamePage';
import EndPage from '../EndPage/EndPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Question } from '../../types';
import { getQuestions } from '../../apiCall';

function App() {

  const [questions, setQuestions] = useState<Question | null>(null);

  const fetchData = async () => {
    try {
      const data = await getQuestions()
      if (data !== "DUPLICATE DEV FETCH") {
        setQuestions(data)
      }
    } catch (error) {
      console.log("ERROR:", error)
    }
}

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/end" element={<EndPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;