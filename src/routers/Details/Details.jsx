import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Details.scss';

function Details() {
  const params = useParams();
  const prodId = params.name;
  console.log("Details proId >", prodId);
  const gameUrl = `https://api.rawg.io/api/games/${prodId}?key=4b8f23359f464857b5bfdea7a6e306aa`;
  const screenUrl = `https://api.rawg.io/api/games/${prodId}/screenshots?key=4b8f23359f464857b5bfdea7a6e306aa`;
  const pagePath = `home / game / ${prodId}`
  const [game, setGame] = useState(false);
  const [screenshots, setScreenshots] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [activePicture, setPicture] = useState(0);
  const styleBtn = isMore ? null : 'block';
  const descriptionHeight = isMore ? {WebkitLineClamp: 4} : null;

  useEffect(() => {
    fetch(gameUrl)
      .then(res => res.json())
      .then(data => setGame(data))
    fetch(screenUrl)
      .then(res => res.json())
      .then(data => setScreenshots(data))
  }, []);

  if (!game || !screenshots) return null;

  return (
    <div className="Details">
      <p className='PagePath'>
        {pagePath}
      </p>
      <h2 className="Details-Name">
        {game.name}
      </h2>
      <div className="Details-Gallery">
        <img
            src="../chevron-left.svg"
            className="Gallery-Chevron Gallery-Chevron_Left"
            alt="left"
            title="left"
            onClick={
              () => setPicture((prev) => prev === 0 ? screenshots.results.length - 1 : prev - 1)
            }
        />
        <img
          className="Gallery-Picture"
          src={screenshots.results[activePicture].image}
          alt="" />
        <img
          src="../chevron-right.svg"
          className="Gallery-Chevron Gallery-Chevron_Right"
          alt="right"
          title="right"
          onClick={
            () => setPicture((prev) => prev === screenshots.results.length - 1 ? 0 : prev + 1)
          }
        />
      </div>

      <h5 className="Details-About">
        About
      </h5>
      <div className="Details-Description">
        <span className="Description-Text" style={descriptionHeight}>
        {game.description_raw}
        </span>
        <span
          className='Description-ShowButton'
          role='button'
          style={{display: styleBtn}}
          onClick={() => setIsMore((prev) => !prev)}
          >
          {isMore ? 'Read more' : 'Show less'}
        </span>
      </div>
      <div className="Details-Info">
        <div className="Card-Release">
          <p className='Release-Title'>
            Release date:
          </p>
          <p className='Release-Date'>
          {game.released}
          </p>
        </div>
        <div className="More">
          <p className="Card-Rating">
            {game.rating}
          </p>
          <Link to={game.website}>
            <p className="Web">
              WebSite
            </p>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Details;
