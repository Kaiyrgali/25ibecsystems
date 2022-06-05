import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from '../../components/Title/Title';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import './Home.scss';

function Home() {
  const store = useSelector((store) => store);
  console.log('store >', store)
  const [refresh, setRefresh] = useState(true);
  const [list, setList] = useState([]);
  const [page, setPage] = useState (1);
  const [maxPage, setMaxPage] = useState(1)
  const [newList, setNewList] = useState(false);

  
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=4b8f23359f464857b5bfdea7a6e306aa&page=${page}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const games = data.results;
        setMaxPage(data.count/20)
        setList([...list, ...games] );
        setNewList([...list, ...games] );
        setPage((prev) => prev+1)
      })
      // .finally(()=>)
  }, [refresh]);


  useEffect(() => {
    document.addEventListener('scroll' ,scrollHandler)
    return function() {
      document.addEventListener('scroll',scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && maxPage === page) {
      console.log('scroll ...')
      setRefresh((prev) => !prev);
    }
  }


  useEffect(() => {
    if (list.length) {
      const listSearch = list.filter(
        (item)=>item.name.toUpperCase().includes(store.search.toUpperCase())
      )
      setNewList(listSearch)
    }
  }, [store.search]);


  if (store.sort === 'Rating Ascending') {
    newList.sort((a,b) => {
      return a.rating-b.rating
    });
  }
  if (store.sort === 'Rating Descending') {
    newList.sort((a,b) => {
      return b.rating-a.rating
    });
  }
  if (store.sort === 'Release Ascending') {
    newList.sort((a,b) => {
      return Date.parse(a.released)-Date.parse(b.released)
    });
  }
  if (store.sort === 'Release Descending') {
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
