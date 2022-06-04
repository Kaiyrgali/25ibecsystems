import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import { getElements } from '../../units/getElements';
import './Home.scss';

function Home() {
  const [refresh, setRefresh] = useState(false);
    const [list, setList] = useState(null);

    useEffect(() => {
      fetch('https://api.rawg.io/api/games?key=4b8f23359f464857b5bfdea7a6e306aa&page=2')
        .then(res => {
          return res.json();
        })
        .then(data => {
          const games = getElements(data);
          setList(games);
          console.log(games);
        })
    }, [refresh]);
  
  return (
    <div className="Home">
      <Title text={'Newest games'} />
      <Filter />
      <div className="List">
        {list === null 
          ? null
          : list.map((item) => 
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
