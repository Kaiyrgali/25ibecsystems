import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import './Home.scss';

function Home() {
  const store = useSelector((store) => store);
  const [refresh, setRefresh] = useState(true);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [newList, setNewList] = useState(false);
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (
      e.target.documentElement.scrollTop + window.innerHeight) < 100
      && maxPage === page) {
      setRefresh((prev) => !prev);
    }
  };

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=4b8f23359f464857b5bfdea7a6e306aa&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        const games = data.results;
        setMaxPage(data.count / 20);
        setList([...list, ...games]);
        setNewList([...list, ...games]);
        setPage((prev) => prev + 1);
      })
      .catch(() => console.log('fetch mistake'));
  }, [refresh]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.addEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (list.length) {
      const listSearch = list.filter(
        (item) => item.name.toUpperCase().includes(store.search.toUpperCase()),
      );
      setNewList(listSearch);
    }
  }, [store.search]);

  if (store.sort === 'Rating Ascending') {
    newList.sort((a, b) => a.rating - b.rating);
  }
  if (store.sort === 'Rating Descending') {
    newList.sort((a, b) => b.rating - a.rating);
  }
  if (store.sort === 'Release Ascending') {
    newList.sort((a, b) => Date.parse(a.released) - Date.parse(b.released));
  }
  if (store.sort === 'Release Descending') {
    newList.sort((a, b) => Date.parse(b.released) - Date.parse(a.released));
  }

  useEffect(() => {
    if (store.platform) {
      const platformFilter = newList.filter(
        (item) => {
          for (let i = 0; i < item.parent_platforms.length; i += 1) {
            const result = item.parent_platforms[i].platform.name;
            if (result === store.platform) {
              return true;
            }
          }
          return false;
        },
      );
      setNewList(platformFilter);
    }
  }, [store.platform]);

  useEffect(() => {
    setNewList(newList);
  }, [newList]);

  return (
    <div className="Home">
      <Title text="Games" />
      <Filter />
      <div className="List">
        {!newList
          ? <Spinner />
          : newList.map((item) => (
            <Card
              key={item.id}
              game={item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
