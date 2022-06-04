import React from 'react';
import './Header.scss';

function Header() {

  return (
    <div className="Header">
      <img className="Logo" src='../logo.svg' alt='Logo' />
      <input
        type="text"
        className="Search"
        placeholder={'Search games'}
        role="searchbox"
        onInput={(e) => {
          console.log(e.target.value)
          // onSearch(e.target.value);
        }}
        />
    </div>
  )
}

export default Header;
