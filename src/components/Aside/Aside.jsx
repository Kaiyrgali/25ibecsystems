import React from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

function Aside() {
  return (
    <div className="Aside">
      <Link to="/" className="Aside-Title">
        home
      </Link>
      <Link to="/games" className="Aside-Title">
        browse
      </Link>
    </div>
  )
}

export default Aside;
