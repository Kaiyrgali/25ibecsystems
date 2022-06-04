import React from 'react';
import './Header.scss';

function Header() {

  return (
    <div className="Header">
      <img className="Logo" src='../logo.svg' alt='Logo' />
      <input type="text" className="Search" placeholder='Search games' role="searchbox" />
    </div>
  )
}

export default Header;
