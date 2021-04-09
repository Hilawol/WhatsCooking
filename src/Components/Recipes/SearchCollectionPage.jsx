import React, { useState, useEffect } from 'react'
import api from '../Api/api'
import SearchBar from '../Recipes/SearchBar'
import RecipesList from './RecipesList'
import { Link } from 'react-router-dom'
import { ERROR_MSG } from './utils'
import ErrMsg from './ErrMsg'

function SearchCollectionPage(props) {

  const [recipeList, setRecipeList] = useState([]);
  const [category, setCategory] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchApi = async (url) => {
    console.log("fetch data collection");
    setLoading(true);
    setErrorMsg(null);
    try {
      const { data } = await api.get(url);
      return data;
    } catch (err) {
      setErrorMsg(ERROR_MSG.apiErr);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    setCategory({ category: props.match.params.id, subcategory: props.match.params.sub });
    const getRandomRecipes = async () => {
      const data = await searchApi(`recipes/complexSearch?query=${props.match.params.sub}`);
      if (data) {
        if (data.results.length > 0) {
          setRecipeList(data.results);
          sessionStorage.setItem('prevSearchCollection', JSON.stringify(data.results));
        }
        else setErrorMsg(ERROR_MSG.notFound);
      }
      else setErrorMsg(ERROR_MSG.apiErr);
    }
    getRandomRecipes();

  }, [])

  const onSearch = async (term) => {
    const data = await searchApi(`recipes/complexSearch?query=${category.subcategory} ${term}`)
    if (data) {
      if (data.results.length > 0) {
        setRecipeList(data.results);
        sessionStorage.setItem('prevSearchCollection', JSON.stringify(data.results));
      }
      else setErrorMsg(ERROR_MSG.notFound);
    }
    else setErrorMsg(ERROR_MSG.apiErr);
  }

  return loading ? (<div className="loader"></div>) :
    <div>
      <SearchBar onSearchbarClick={onSearch} />

      <div className="searchStateBtnDiv">
        <Link to="/recipes/" className="searchStateBtn currentState">Recipe Collections</Link>
        <Link to="/recipes/all" className="searchStateBtn">All Recipes</Link>
      </div>

      {!errorMsg ? < RecipesList recipes={recipeList} /> :
        <ErrMsg msg={errorMsg} />
      }
    </div>
}

export default SearchCollectionPage
