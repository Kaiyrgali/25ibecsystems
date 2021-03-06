import React from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <img className="Logo" src="../logo.svg" alt="Logo" />
      <input
        type="text"
        className="Search"
        placeholder="Search games"
        role="searchbox"
        onInput={(e) => {
          const action = e.target.value;
          dispatch({ type: 'ADD_SEARCH_TEXT', action });
        }}
      />
    </div>
  );
}

export default Header;
