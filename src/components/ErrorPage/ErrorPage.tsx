import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <main>
      <h1> Opps you shouldn't be here! Please go back</h1>
      <Link to="/game">
        <button className="return-to-game-btn">Return to Game</button>
      </Link>
    </main>
  )
};

export default ErrorPage;
