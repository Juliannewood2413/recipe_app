import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';


const App = () => {
  const APP_ID = '10a7ca34';
  const APP_KEY = 'f9403c8202d74dbc0a2df7c300eeb47a';

  const request = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () =>{
    const response = await fetch(request)
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);
  }



  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe />
      ))}
    </div>
  )
}

export default App;
