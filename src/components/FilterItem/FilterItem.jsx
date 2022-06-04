import React from 'react';
import './FilterItem.scss';

function FilterItem({ platform }) {
  console.log(platform);
  return (
    <p className="FilterItem-Text">
      {platform}
    </p>  
  );
}

export default FilterItem;

