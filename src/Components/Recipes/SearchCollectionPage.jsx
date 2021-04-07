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

  const searchApi = async (url) => {
    setErrorMsg(null);
    try {
      const { data } = await api.get(url);
      return data;
    } catch (err) {
      setErrorMsg(ERROR_MSG.apiErr);
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
    debugger
    const data = await searchApi(`recipes/complexSearch?query=${category.subcategory} ${term}`)
    if (data) {
      if (data.results.length > 0) {
        setRecipeList(data.results);
        sessionStorage.setItem('prevSearchAll', JSON.stringify(data.results));
      }
      else setErrorMsg(ERROR_MSG.notFound);
    }
    else setErrorMsg(ERROR_MSG.apiErr);
  }

  return (
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
  )
}

export default SearchCollectionPage