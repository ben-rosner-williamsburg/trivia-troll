import React from 'react';
import { Link } from "react-router-dom";

const LogoPage = () => {
  return (
    <div>
      <Link to="/main">
        <button className="enter-game-btn">Enter</button>
      </Link>
    </div>
  );
};

export default LogoPage;
