import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterItem from '../FilterItem/FilterItem';
import './Filter.scss';

const url = 'https://api.rawg.io/api/';
const key = '?key=4b8f23359f464857b5bfdea7a6e306aa';

function Filter() {
  const platformUrl = `${url}platforms/lists/parents${key}`;
  const [showSort, setShowSort] = useState({ display: 'none' });
  const [showPlatforms, setShowPlatforms] = useState({ display: 'none' });
  const [platformsList, setPlatformsList] = useState(false);

  useEffect(() => {
    fetch(platformUrl)
      .then((res) => res.json())
      .then((data) => setPlatformsList(data))
      .catch(() => console.log('fetch mistake'));
  }, []);

  const dispatch = useDispatch();
  const onDispatch = (type, action) => {
    dispatch({ type, action });
    setShowSort({ display: 'none' });
    setShowPlatforms({ display: 'none' });
  };

  if (!platformsList) return null;

  return (
    <div className="Filter">
      <div className="Dropdown">
        <button
          className="Dropdown-Btn Dropdown-Btn_Sort"
          type="button"
          onClick={() => setShowSort({ display: 'block' })}
        >
          <div className="Btn-Content">
            <p className="Btn-Title">
              Sort by:
            </p>
            <img src="./arrow.svg" alt="Arrow" className="Btn-Arrow" />
          </div>
        </button>
        <div
          className="Filter-Select Filter-Select_Sort"
          style={showSort}
          onMouseLeave={() => setShowSort({ display: 'none' })}
        >
          {['Rating Ascending', 'Rating Descending', 'Release Ascending', 'Release Descending'].map((item) => (
            <FilterItem
              key={item}
              value={item}
              type="ADD_FILTER"
              onDispatch={onDispatch}
            />
          ))}
        </div>

      </div>
      <div className="Dropdown">
        <button
          className="Dropdown-Btn Dropdown-Btn_Platforms"
          type="button"
          onClick={() => setShowPlatforms({ display: 'block' })}
        >
          <div className="Btn-Content">
            <p className="Btn-Title">
              Platforms
            </p>
            <img src="./arrow.svg" alt="Arrow" className="Btn-Arrow" />
          </div>
        </button>
        <div
          className="Filter-Select Filter-Select_Platforms"
          style={showPlatforms}
          onMouseLeave={() => setShowPlatforms({ display: 'none' })}
        >
          {platformsList.results.map((item) => (
            <FilterItem
              key={item.id}
              value={item.name}
              type="ADD_FILTER_PLATFORM"
              onDispatch={onDispatch}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
