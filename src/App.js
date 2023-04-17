import React, { useEffect } from 'react';
import { setMovieData } from './Redux/Movie';
import { useDispatch } from 'react-redux';


const App = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    getData();
  },[])

  const getData = async() => {
    let data = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c22820f1&s=Hero&type=movie');
    data=await data.json();
    dispatch(setMovieData(data))
  }
  return (
    <div>App</div>
  )
}

export default App