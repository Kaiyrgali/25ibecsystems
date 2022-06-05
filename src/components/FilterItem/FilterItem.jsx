import React from 'react';

import './FilterItem.scss';

function FilterItem({ value, type, onDispatch }) {
  return (
    <p
      className="FilterItem-Text"
      onClick={() => onDispatch(type, value)}
    >
      {value}
    </p>
  );
}

export default FilterItem;
