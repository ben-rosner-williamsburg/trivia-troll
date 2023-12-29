import React from 'react';
import './Header.scss';
import HappyTrollImage from '../HappyTroll/HappyTroll';

// type HeaderProps = {
//   title: string;
// };

const Header = () => {
  return (
    <div className='header'>
      <h1>Trivia Troll</h1>
      <HappyTrollImage />
    </div>
  );
};

export default Header;