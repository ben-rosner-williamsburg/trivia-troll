import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const MainPage = ({ setSelectedDifficulty }: any) => {
  return (
    <div>
      <DropDownMenu setSelectedDifficulty={setSelectedDifficulty} />
      <Link to="/game">
        <button className="play-btn">Play Game</button>
      </Link>
    </div>
  );
};

export default MainPage;
