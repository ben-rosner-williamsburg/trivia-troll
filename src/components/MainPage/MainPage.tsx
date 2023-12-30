import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Select Category</h1>
      <Link to="/game">
        <button className="play-btn">Play Game</button>
      </Link>
    </div>
  );
};

export default MainPage;
