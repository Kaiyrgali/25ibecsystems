import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.scss';

function Header() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <img className="Logo" src='../logo.svg' alt='Logo' />
      <input
        type="text"
        className="Search"
        placeholder={'Search games'}
        role="searchbox"
        onInput={(e) => {
          const action = e.target.value;
          // console.log(action)
          dispatch({ type: 'ADD_SEARCH_TEXT', action });
        }}
        />
      {/* <img className="Burger" src='../burger.svg' alt='Menu' /> */}
    </div>
  )
}

export default Header;
