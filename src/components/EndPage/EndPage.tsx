import './EndPage.scss'
import { useNavigate } from 'react-router-dom'
const EndPage = ({score}: any) => {
const navigate = useNavigate()

 const backtoMainClick = () => {
    navigate('/')
  }
const scoreData = {score}
  return (
    <div>
      <p>Your Score: {scoreData.score}</p>
      <button onClick={backtoMainClick} className="return-to-main">Back to Start</button>
    </div>
  );
};

export default EndPage;
