//import logo from './logo.svg';
import './App.css';
import MovCard from './Components/MovCard'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiURL = `http://www.omdbapi.com/?i=tt3896198&apikey=7f07872`;
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
     </div>
  );
}

export default App;
