import './LogoPage.scss'
import { Link } from "react-router-dom";
// import HappyTroll from '../HappyTroll/HappyTroll'
import HappyTroll from '../../Images/HappyTroll.png';
const LogoPage = () => {
  return (
    <main className='logo-page'>
      <div className='content-wrapper'>
        <div className='image-wrapper'>
          <img src={HappyTroll} alt='happy-troll' className='happy-troll-logo-page' />
        </div>
        <div className='text-wrapper'>
          <h1 className='trivia-troll-logo-title'>Trivia Troll</h1>
          <Link to='/main'>
            <button className='enter-game-btn'>Enter</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LogoPage;
