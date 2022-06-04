import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from '../../components/Title/Title';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import { getElements } from '../../units/getElements';
import './Home.scss';

function Home() {
  const store = useSelector((store) => store);
  console.log('store >', store)
  const [refresh, setRefresh] = useState(false);
  const [list, setList] = useState(false);
  const [newList, setNewList] = useState(false);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=4b8f23359f464857b5bfdea7a6e306aa&page=2')
      .then(res => {
        return res.json();
      })
      .then(data => {
        const games = getElements(data);
        setList(games);
        setNewList(games);
      })
  }, [refresh]);

  useEffect(() => {
    if (list) {
      const listSearch = list.filter(
        (item)=>item.name.toUpperCase().includes(store.search.toUpperCase())
      )
      setNewList(listSearch);
    }
  }, [store.search]);
  
  return (
    <div className="Home">
      <Title text={'Newest games'} />
      <Filter />
      <div className="List">
        {!newList 
          ? null
          : newList.map((item) => 
            <Card
              key={item.id}
              game={item}
            />
        )}
      </div>
    </div>
  )
}

export default Home;
