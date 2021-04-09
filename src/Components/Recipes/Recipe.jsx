import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../Api/api'
import Ingredients from './Ingredients';
import Instruction from './Instruction';
import { ERROR_MSG } from './utils';
import ErrMsg from './ErrMsg';


function Recipe(props) {

  const [recipe, setRecipe] = useState(null);
  const [id, setId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favorit, setFavorit] = useState(false);
  const history = useHistory();


  const markFavorite = (recipe) => {
    const recipes = JSON.parse(localStorage.getItem('favoritRecipes'));
    if (recipes && recipes.length > 0) {
      const r = recipes.find(rec => rec.id === recipe.id);
      if (r) {
        setFavorit(true);
      }
    }
  }

  useEffect(async () => {
    const fetchRecipeInformation = async (id) => {
      setLoading(true);
      try {
        const url = `recipes/${id}/information?&includeNutrition=true`
        const { data } = await api.get(url);
        return data;
      } catch (err) {
        console.log(err);
        setErrorMsg(ERROR_MSG.apiErr);
      }
      finally {
        setLoading(false);
      }
    }

    if (!id) {
      setId(props.match.params.id);
    }

    let recipe;
    try {
      recipe = JSON.parse(localStorage.getItem(`recipe${props.match.params.id}`));
    }
    catch (err) {
      console.log(err);
      setErrorMsg(ERROR_MSG.apiErr);
    }

    if (!recipe) {
      recipe = await fetchRecipeInformation(props.match.params.id);
      if (recipe) {
        localStorage.setItem(`recipe${props.match.params.id}`, JSON.stringify(recipe));
      }
      else setErrorMsg(ERROR_MSG.apiErr);
    }
    markFavorite(recipe);
    setRecipe(recipe);
    // setFavorit(rec)
  }, []);

  const parseHtmlToString = (html) => {
    if (html) {
      var stripedHtml = html.replace(/<[^>]+>/g, '');
      return stripedHtml;
    }
  }

  let search = "";
  let category = "";

  if (props.location.searchState) {
    search = props.location.searchState.searchState;
  }
  if (props.location.category) {
    category = props.location.searchState.category;
  }

  let emailBody;
  if (recipe) {
    emailBody = `Check out this great recipe for ${recipe.title} I found on WhatsCooking?%0D%0A
  ${window.location.href}%0D%0AHope you enjoy it!`
  }


  const onFavoritClick = () => {
    console.log("heart click");
    const favRecipes = JSON.parse(localStorage.getItem('favoritRecipes'));
    if (!favorit) { //need to add recipe to favorites
      if (!favRecipes) { //favorites doesn't exists in localstorage - need to store it.
        const arr = [recipe];
        localStorage.setItem('favoritRecipes', JSON.stringify(arr));
      }
      else {//found favorites in localstorage. need to add the recipe
        favRecipes.push(recipe);
        localStorage.setItem('favoritRecipes', JSON.stringify(favRecipes));
      }
      setFavorit(true);
    }
    else { //need to remove recipe from favorites
      const recipeIndex = favRecipes.indexOf(recipe);
      favRecipes.splice(recipeIndex, 1);
      localStorage.setItem('favoritRecipes', JSON.stringify(favRecipes));
      setFavorit(false);
    }
  }

  return loading ? (<div className="loader"></div>) :
    recipe ?
      <div className="recipe">

        <button onClick={() => history.goBack()} > <i className="fas fa-long-arrow-alt-left backLink"> Back </i> </button>
        <br />
        <div className="recipeHero">
          <div className="recipeImg" style={{ backgroundImage: `url(${recipe.image})` }}></div>
          <div className="recipeHeroText">
            <h1 className="recipeTitle">{recipe.title}</h1>
            <br />
            <span><i className="fas fa-stopwatch"></i> {recipe.readyInMinutes}&nbsp;min&nbsp;&nbsp;&nbsp; <i className="fas fa-utensils"></i> {recipe.servings}</span>
            <br />
            <br />
            <div className="recipeActionBtns">
              <a href={`mailto:?body=${emailBody}&subject=${recipe.title}`}><i className="fas fa-envelope"></i></a>
              <a href={`whatsapp://send?text=${emailBody}`}><i className="fab fa-whatsapp"></i></a>
              <button className="favorit" onClick={onFavoritClick}><i className={`${favorit ? 'fas' : 'far'} far fa-heart`} id="heart"></i></button>
            </div>
          </div>
        </div>
        <p className="recipeSummary">{parseHtmlToString(recipe.summary)}</p>
        <div className="recipeMain">
          <Ingredients ingredients={recipe.extendedIngredients} />
          <Instruction instructions={recipe.instructions} analyzedInstructions={recipe.analyzedInstructions} />
        </div >
      </div> :
      errorMsg ? <ErrMsg msg={errorMsg} /> : null
}


export default Recipe

