import './EndPage.scss'
import { useNavigate } from 'react-router-dom'

const EndPage = () => {
const navigate = useNavigate()

  const backtoMainClick = () => {
    navigate('/')
  }

  return (
    <div>
      <p>Your Score</p>
      <button onClick={backtoMainClick} className="return-to-main">Back to Start</button>
    </div>
  );
};

export default EndPage;
