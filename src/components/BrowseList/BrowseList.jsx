import React from 'react';
import BrowseListItem from '../BrowseListItem/BrowseListItem';
import './BrowseList.scss';

function BrowseList({ topic, data }) {
  return (
    <div>
      <div className="BrowseList-Heading">
        <h2 className="Heading-Topic">{topic}</h2>
        <span className="Heading-Count">{data.count}</span>
        <img src="./arrow.svg" alt="arrow" className="Heading-Arrow" />
      </div>
      <div className="BrowserList-Items">
        <BrowseListItem key={data.results[0].id} info={data.results[0]} />
        <BrowseListItem key={data.results[1].id} info={data.results[1]} />
        <BrowseListItem key={data.results[2].id} info={data.results[2]} />
        <BrowseListItem key={data.results[3].id} info={data.results[3]} />
        <BrowseListItem key={data.results[4].id} info={data.results[5]} />
      </div>
    </div>
  );
}

export default BrowseList;
