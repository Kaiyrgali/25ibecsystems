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
  const [listSort, setListSort] = useState(null)

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
      setNewList(listSearch)
    }
  }, [store.search]);

  if (store.rating === 'Ascending') {
    newList.sort((a,b) => {
      return a.rating-b.rating
    });
  }
  if (store.rating === 'Descending') {
    newList.sort((a,b) => {
      return b.rating-a.rating
    });
  }
  if (store.release === 'Ascending') {
    newList.sort((a,b) => {
      return Date.parse(a.released)-Date.parse(b.released)
    });
  }
  if (store.release === 'Descending') {
    newList.sort((a,b) => {
      return Date.parse(b.released)-Date.parse(a.released)
    });
  }

  useEffect(() => {
    if (store.platform) {
      const platformFilter = newList.filter(
        (item)=> {
          for (let i = 0; i < item.parent_platforms.length; i++) {
            const result = item.parent_platforms[i].platform.name;
            if (result === store.platform) {
              return true
            }
          }
        }  
      )
      setNewList(platformFilter)
    }
  }, [store.platform]);
 



useEffect(() => {
  console.log('change listSort >>')
  setNewList(newList)
}, [newList])




  
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
