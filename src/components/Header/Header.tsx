import React from 'react';
import './Header.scss';
import HappyTrollImage from '../HappyTroll/HappyTroll';

const Header = () => {
  return (
    <div className="header">
      <HappyTrollImage/>
      <h1 className='header-text'>Trivia Troll</h1>
    </div>
  );
};

export default Header;
