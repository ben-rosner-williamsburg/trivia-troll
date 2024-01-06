import './LogoPage.scss';
import { Link } from 'react-router-dom';
import HappyTroll from '../../Images/HappyTroll.png';

const LogoPage = () => {
  return (
    <main className="logo-page">
      <div className="wrapper-container">
        <div className="image-wrapper">
          <img
            src={HappyTroll}
            alt="happy-troll"
            className="happy-troll-logo-page"
          />
        </div>
        <div className="text-wrapper">
          <h1 className="trivia-troll-logo-title">Trivia Troll</h1>
          <p className="app-description">
            Answer Questions to pass the Troll's bridge!
          </p>
          <Link to="/main">
            <button className="enter-game-btn">Enter</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LogoPage;
