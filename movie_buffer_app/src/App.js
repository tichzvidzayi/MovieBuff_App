//import logo from './logo.svg';
import './App.css';
import {MovCard} from './Components/MovieCard/MovCard.jsx'
import './Components/MovieCard/MovCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiURL = `http://www.omdbapi.com/?s=Friends&apikey=7f07872`;
 const  getMovies = async ()=>{
  try{
    const data = await axios.get(apiURL);
    console.log(data);
  }
  catch(err){
     console.log(err + "error");
  }

 }
 
 useEffect(()=>{
  getMovies();

 }, [])
 
 
  return (
    <div className="App">
      <h1>Movies</h1>
      <MovCard></MovCard>
     </div>
  );
}

export default App;
