import React, { useState, useEffect } from 'react';
import { getElements } from '../../units/getElements';
import './Home.scss';

function Home() {
  const [refresh, setRefresh] = useState(false);
  const [list, setList] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=4b8f23359f464857b5bfdea7a6e306aa&page=2")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const elem = getElements(data);
        setList(elem);
        console.log(list);
      })
  }, [refresh]);

  return (
    <div className="Home">

    </div>
  )
}

export default Home;
