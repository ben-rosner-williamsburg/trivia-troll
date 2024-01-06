import TrollBridge from '../../Images/troll-bridge.png';
import './EndPage.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const EndPage = ({ score }: any) => {
  const navigate = useNavigate();

  const backtoMainClick = () => {
    navigate('/');
  };

  const scoreData = { score };
  return (
    <div>
      <Header />
      <div className="end-container">
        <img src={TrollBridge} alt="troll-bridge" className="troll-bridge" />
        <h4 className="end-phrase">You've completed all the questions!</h4>
        <p className="end-score">Your Score: {scoreData.score}/5</p>
        <button onClick={backtoMainClick} className="return-to-main">
          Back to Start
        </button>
      </div>
    </div>
  );
};

export default EndPage;
