import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LogoPage from '../LogoPage/LogoPage';
import MainPage from '../MainPage/MainPage';
import GamePage from '../GamePage/GamePage';
import EndPage from '../EndPage/EndPage'
import ErrorPage from '../ErrorPage/ErrorPage'

function App() {
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
