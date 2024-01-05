import './MainPage.scss';
import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Header from '../Header/Header';

const MainPage = ({ setSelectedDifficulty }: any) => {
  return (
    <main className="main-page">
      <Header />
      <h2>Enter the Trivia Troll's Lair if You Dare!</h2>
      <DropDownMenu setSelectedDifficulty={setSelectedDifficulty} />
      <Link to="/game">
        <button className="play-btn">Play Game</button>
      </Link>
    </main>
  );
};

export default MainPage;
