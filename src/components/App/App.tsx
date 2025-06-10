import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameProvider } from '../../context/GameContext';
import LogoPage from '../LogoPage/LogoPage';
import MainPage from '../MainPage/MainPage';
import GamePage from '../GamePage/GamePage';
import EndPage from '../EndPage/EndPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function App() {
  const [highScore, setHighScore] = useLocalStorage('triviaHighScore', 0);
  const [gamesPlayed, setGamesPlayed] = useLocalStorage('triviaGamesPlayed', 0);

  useEffect(() => {
    // Add accessibility improvements
    document.documentElement.setAttribute('lang', 'en');
  }, []);

  return (
    <GameProvider>
      <main className="App" role="main">
        <Routes>
          <Route path="/" element={<LogoPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route 
            path="/game" 
            element={
              <GamePage 
                highScore={highScore}
                setHighScore={setHighScore}
              />
            } 
          />
          <Route 
            path="/end" 
            element={
              <EndPage 
                highScore={highScore}
                setHighScore={setHighScore}
                gamesPlayed={gamesPlayed}
                setGamesPlayed={setGamesPlayed}
              />
            } 
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </GameProvider>
  );
}

export default App;