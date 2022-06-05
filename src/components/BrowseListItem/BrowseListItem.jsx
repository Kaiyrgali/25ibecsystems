import React from 'react';
import { Link } from 'react-router-dom';
import './BrowseListItem.scss';

function BrowseListItem({ info }) {
  const BrowseCardBackground = { backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${info.image_background})` };

  return (
    <div className="BrowseCard-Wrap" style={BrowseCardBackground}>
      <div className="BrowseCard">
        <p className="BrowseCard-Name">
          {info.name}
        </p>
        <div className="BrowseCard-Popular">
          <p className="Popular-Title">
            Popular items
          </p>
          <p className="Popular-Count">
            {info.games_count}
          </p>
        </div>
        <Link to={`/games/${info.games[0].slug}`} className="Link">
          <div className="BrowseCard-Game">
            <p className="Game-Name">
              {info.games[0].name}
            </p>
            <p className="Game-Count">
              {info.games[0].added}
            </p>
          </div>
        </Link>
        <Link to={`/games/${info.games[1].slug}`} className="Link">
          <div className="BrowseCard-Game">
            <p className="Game-Name">
              {info.games[1].name}
            </p>
            <p className="Game-Count">
              {info.games[1].added}
            </p>
          </div>
        </Link>
        <Link to={`/games/${info.games[2].slug}`} className="Link">
          <div className="BrowseCard-Game">
            <p className="Game-Name">
              {info.games[2].name}
            </p>
            <p className="Game-Count">
              {info.games[2].added}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BrowseListItem;
