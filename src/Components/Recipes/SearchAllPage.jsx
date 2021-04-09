import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import api from '../Api/api'
import RecipesList from '../Recipes/RecipesList'
import { Link } from 'react-router-dom'
import ErrMsg from './ErrMsg'
import { ERROR_MSG } from './utils'

function SearchAllPage() {

  const [recipeList, setRecipeList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchApi = async (url) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const { data } = await api.get(url);
      return data;
    }
    catch (err) {
      console.log(err);
      setErrorMsg(ERROR_MSG.apiErr);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem('prevSearchAll'));
    const getRandomRecipes = async () => {
      data = await searchApi(`recipes/random?`); //search for random recipes.
      if (data) {
        if (data.recipes.length > 0) {
          setRecipeList(data.recipes);
          sessionStorage.setItem('prevSearchAll', JSON.stringify(data.recipes));
        }
        else setErrorMsg(ERROR_MSG.notFound);
      }
      else setErrorMsg(ERROR_MSG.apiErr);
    }
    if (!data) { //could not find data in localstorage
      getRandomRecipes();
    }
    else {
      setRecipeList(data); //setting the data from localstorage
    }
  }, []);

  const onSearch = async (term) => {
    const data = await searchApi(`recipes/complexSearch?query=${term}`)
    if (data) {
      if (data.results.length > 0) {
        setRecipeList(data.results);
        sessionStorage.setItem('prevSearchAll', JSON.stringify(data));
      }
      else setErrorMsg(ERROR_MSG.notFound);
    }
    else setErrorMsg(ERROR_MSG.apiErr);
  }

  return loading ? (<div className="loader"></div>) :
    <div>
      <SearchBar onSearchbarClick={onSearch} />
      <div className="searchStateBtnDiv">
        <Link to="/recipes/" className="searchStateBtn">Recipe Collections</Link>
        <span className="searchStateBtn currentState" >All Recipes</span>
      </div>
      {!errorMsg ? < RecipesList recipes={recipeList} /> : <ErrMsg msg={errorMsg} />}
    </div>
}

export default SearchAllPage
