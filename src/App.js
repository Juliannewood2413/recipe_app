import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';


const App = () => {
  const APP_ID = '10a7ca34';
  const APP_KEY = 'f9403c8202d74dbc0a2df7c300eeb47a';
  const [query, setQuery] = useState('chicken');

  const request = 
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(request)
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <form 
      className="search-form"
      onSubmit={getSearch}
      >
        <input 
        className="search-bar" 
        type="text" 
        value={search}
        onChange={updateSearch}
        />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
