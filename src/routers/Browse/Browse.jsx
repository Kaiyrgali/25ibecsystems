import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
import BrowseList from '../../components/BrowseList';
import './Browse.scss';

const url = 'https://api.rawg.io/api/';
const key= '?key=4b8f23359f464857b5bfdea7a6e306aa';

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
      .then(res => res.json())
      .then(data => setPlatform(data))
    fetch(genresUrl)
      .then(res => res.json())
      .then(data => setGenres(data))
    fetch(tagsUrl)
      .then(res => res.json())
      .then(data => setTags(data))
    fetch(creatorsUrl)
      .then(res => res.json())
      .then(data => setCreators(data))
  }, []);

  if (!platform || !genres || !tags || !creators) return null;

  return (
    <div className="Browse">
      <Title text={'Browse'} />
      <BrowseList topic={'platform'} data={platform} />
      <BrowseList topic={'genres'} data={genres}/>
      <BrowseList topic={'tags'} data={tags}/>
      <BrowseList topic={'creators'} data={creators}/>
    </div>
  );
}

export default Browse;
