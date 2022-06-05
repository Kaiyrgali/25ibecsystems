import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterItem from '../FilterItem/FilterItem';
import './Filter.scss';

const url = 'https://api.rawg.io/api/';
const key= '?key=4b8f23359f464857b5bfdea7a6e306aa';

function Filter() {
  const platformUrl = `${url}platforms/lists/parents${key}`;
  const [showRating, setShowRating] = useState(false);
  const ratingStyle = showRating ? {display: 'block'} : {display: 'none'};
  const [showPlatforms, setShowPlatforms] = useState(false);
  const platformsStyle = showPlatforms ? {display: 'block'} : {display: 'none'};
  const [platformsList, setPlatformsList] = useState(false);

  useEffect(() => {
    console.log('<<< Fetched platforms for filters >>>');
    fetch(platformUrl)
      .then(res => res.json())
      .then(data => setPlatformsList(data))
  }, []);

  const dispatch = useDispatch();
  const onDispatch = (type, action) => {
    dispatch({ type, action })
    setShowRating(false)
    setShowRelease(false)
    setShowPlatforms(false)
  };

  if ( !platformsList ) return null;

  return (
    <div className="Filter">
      <div className="Dropdown">
        <button
          className="Dropdown-Btn Dropdown-Btn_Rating"
          type="button"
          onClick={()=>setShowRating((prev) => !prev)}
        >
          <div className="Btn-Content">
            <div className="Btn-Title">
            Sort by: 
            </div>
            <img src="./arrow.svg" alt="Arrow" className="Btn-Arrow" />
          </div>
        </button>
        <div
          className="Filter-Select Filter-Select_Rating"
          style={ratingStyle}
          onMouseLeave={()=>setShowRating(false)}
        >
          {['Rating Ascending', 'Rating Descending', 'Release Ascending','Release Descending'].map((item) => 
            <FilterItem
              key={item}
              value={item}
              type={'ADD_FILTER'}
              onDispatch={onDispatch}
            />  
          )}
        </div>

      </div>
      <div className="Dropdown">
        <button
          className="Dropdown-Btn Dropdown-Btn_Platforms"
          type="button"
          onClick={()=>setShowPlatforms(true)}
        >
          <div className="Btn-Content">
            <div className="Btn-Title">
              Platforms
            </div>
            <img src="./arrow.svg" alt="Arrow" className="Btn-Arrow" />
          </div>
        </button>
        <div
          className="Filter-Select Filter-Select_Platforms"
          style={platformsStyle}
          onMouseLeave={()=>setShowPlatforms(false)}
        >
            {platformsList.results.map((item) => 
              <FilterItem
                key={item.id}
                value={item.name}
                type={'ADD_FILTER_PLATFORM'}
                onDispatch={onDispatch}
              />  
            )}
        </div>
      </div>
    </div>
  )
}
export default Filter;

