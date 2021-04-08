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

    const getRandomRecipes = async () => {
      const data = await searchApi(`recipes/random?`); //Returns random recipes.
      if (data) {
        if (data.recipes.length > 0) {
          setRecipeList(data.recipes);
          sessionStorage.setItem('prevSearchAll', JSON.stringify(data.results));
        }
        else setErrorMsg(ERROR_MSG.notFound);
      } else setErrorMsg(ERROR_MSG.apiErr);
    }
    getRandomRecipes();
  }, []);

  const onSearch = async (term) => {
    const data = await searchApi(`recipes/complexSearch?query=${term}`)
    if (data) {
      if (data.results.length > 0) {
        setRecipeList(data.results);
        sessionStorage.setItem('prevSearchAll', JSON.stringify(data.results));
      }
      else setErrorMsg(ERROR_MSG.notFound);
    } else setErrorMsg(ERROR_MSG.apiErr);
  }


  return loading ? (<div className="loader">Loadgin</div>) :
    <div>
      <SearchBar onSearchbarClick={onSearch} />
      <div className="searchStateBtnDiv">
        <Link to="/recipes/" className="searchStateBtn">Recipe Collections</Link>
        <span className="searchStateBtn currentState" >All Recipes</span>
      </div>
      {!errorMsg ? < RecipesList recipes={recipeList} /> :
        <ErrMsg msg={errorMsg} />
      }
    </div>
}

export default SearchAllPage
