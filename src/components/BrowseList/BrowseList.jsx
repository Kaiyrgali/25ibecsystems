import React from 'react';
import BrowseListItem from '../BrowseListItem/BrowseListItem';
import './BrowseList.scss';


function BrowseList({ topic, data }) {
  console.log('Theme >', data)
  return (
    <div>
      <div className="BrowseList-Heading">
        <h2 className="Heading-Topic">{topic}</h2>
        <span className='Heading-Count'>{data.count}</span>
        <img src="./browselist-arrow.svg" alt="arrow" className="Heading-Arrow" />
      </div>
        <BrowseListItem key={data.id} info={data.results[0]} />
    </div>
  )
}
export default BrowseList;

