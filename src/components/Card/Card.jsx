import React from 'react';
import { Link } from 'react-router-dom';
import getDateFormat from '../../units/getDateFormat/getDateFormat';
import './Card.scss';

function Card({ game }) {
  const url = `/games/${game.slug}`;

  return (
    <Link to={url} className="Link">
      <div className="Card">
        <img
          className="Card-Poster"
          src={game.background_image}
          alt="poster"
        />
        <div className="Card-Info">
          <h4 className="Card-Name">
            {game.name}
          </h4>
          <p className="Card-Rating">
            {game.rating}
          </p>
          <div className="Card-Release">
            <p className="Release-Title">
              Release date:
            </p>
            <p className="Release-Date">
              {getDateFormat(game.released)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
