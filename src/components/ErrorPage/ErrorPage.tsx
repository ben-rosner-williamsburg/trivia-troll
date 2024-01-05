import { Link } from 'react-router-dom';
import AngryTroll from '../AngryTroll/AngryTroll';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <main className="error-page-container">
      <AngryTroll />
      <h1 className="error-message">
        {' '}
        Oops you shouldn't be here! Please go back.
      </h1>
      <Link to="/">
        <button className="return-to-game-btn">Return to Game</button>
      </Link>
    </main>
  );
};

export default ErrorPage;
