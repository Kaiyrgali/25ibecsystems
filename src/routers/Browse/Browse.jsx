import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
import BrowseList from '../../components/BrowseList';
import './Browse.scss';
import Spinner from '../../components/Spinner/Spinner';

const url = 'https://api.rawg.io/api/';
const key = '?key=4b8f23359f464857b5bfdea7a6e306aa';

function Browse() {
  const platformUrl = `${url}platforms${key}`;
  const genresUrl = `${url}genres${key}`;
  const tagsUrl = `${url}tags${key}`;
  const creatorsUrl = `${url}creators${key}`;
  const [platform, setPlatform] = useState(false);
  const [genres, setGenres] = useState(false);
  const [tags, setTags] = useState(false);
  const [creators, setCreators] = useState(false);

  useEffect(() => {
    fetch(platformUrl)
      .then((res) => res.json())
      .then((data) => setPlatform(data))
      .catch(() => console.log('fetch mistake'));
    fetch(genresUrl)
      .then((res) => res.json())
      .then((data) => setGenres(data))
      .catch(() => console.log('fetch mistake'));
    fetch(tagsUrl)
      .then((res) => res.json())
      .then((data) => setTags(data))
      .catch(() => console.log('fetch mistake'));
    fetch(creatorsUrl)
      .then((res) => res.json())
      .then((data) => setCreators(data))
      .catch(() => console.log('fetch mistake'));
  }, []);

  if (!platform || !genres || !tags || !creators) return <Spinner />;

  return (
    <div className="Browse">
      <Title text="Browse" />
      <BrowseList topic="platform" data={platform} />
      <BrowseList topic="genres" data={genres} />
      <BrowseList topic="tags" data={tags} />
      <BrowseList topic="creators" data={creators} />
    </div>
  );
}

export default Browse;
