import React from 'react';
import './Title.scss';

function Title({ text }) {
  return (
    <h1 className="Title">
      {text}
    </h1>
  );
}
export default Title;
