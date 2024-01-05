import './MainPage.scss';
import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Header from '../Header/Header';

const MainPage = ({ setSelectedDifficulty }: any) => {
  return (
    <main className="main-page">
      <Header />
      <h3>Enter the Trivia Troll's Lair if You Dare!</h3>
      <div className="choose-and-play-menu">
        <DropDownMenu className="select-level" setSelectedDifficulty={setSelectedDifficulty} />
        <Link className="go-play" to="/game">
          <button className="play-btn">Play Game</button>
        </Link>
      </div>
    </main>
  );
};

export default MainPage;
