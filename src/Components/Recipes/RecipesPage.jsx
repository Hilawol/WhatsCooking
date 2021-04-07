import React, { useState, useEffect } from 'react'
import CategoryCard from '../HomePage/CategoryCard'
import { categories } from './utils'
import { Link } from 'react-router-dom'

function Recipes(props) {

  const [recipeList, setRecipeList] = useState([]);
  const [searchState, setSearchState] = useState("collection"); //searchState="collection"/"all"/"category"
  const [currentCategory, setcurrentCategory] = useState({});

  useEffect(() => {
    //When navigating back from Recipe.jsx we pull back the last search results

    if (props.location.searchState) {
      setSearchState(props.location.searchState.searchState);
      const recipeList = JSON.parse(sessionStorage.getItem('prevRecipeList'));
      setRecipeList(recipeList);
    }
    if (props.location.category) {
      setcurrentCategory(props.location.searchState.category);
    }

  }, []);

  return (

    <div>
      <div className="searchStateBtnDiv">
        <input id="collection" className="searchStateBtn currentState" type="button" value="Recipe Collections" />
        <Link to="/recipes/all" className="searchStateBtn">All Recipes</Link>
      </div>
      <div className="categoryGrid">
        {categories.map(c => <CategoryCard key={c.id} id={c.id} text={c.text} image={c.image} />)}
      </div>;
    </div>
  )
}

export default Recipes

