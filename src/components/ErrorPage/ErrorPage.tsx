import { Link } from "react-router-dom"
import AngryTroll from "../AngryTroll/AngryTroll";

const ErrorPage = () => {
  return (
    <main>
      <AngryTroll /> 
      <h1> Opps you shouldn't be here! Please go back</h1>
      <Link to="/main">
        <button className="return-to-game-btn">Return to Game</button>
      </Link>
    </main>
  )
};

export default ErrorPage;
