import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../Api/api'
import Ingredients from './Ingredients';
import Instruction from './Instruction';
import { ERROR_MSG } from './utils'

function Recipe(props) {

  const [recipe, setRecipe] = useState(null);
  const [id, setId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    //TODO:try/catch
    //TODO:add spinner to all api calls
    //TODO:check local storage functionality
    const fetchRecipeInformation = async (id) => {
      setLoading(true);
      try {
        const url = `recipes/${id}/information?&includeNutrition=true`
        const { data } = await api.get(url);
        return data;
      } catch (err) {
        setErrorMsg(ERROR_MSG.apiErr);
      }
      finally {
        setLoading(false);
      }
    }

    if (!id) {
      setId(props.match.params.id);
    }
    let recipe = JSON.parse(localStorage.getItem(`recipe${props.match.params.id}`));


    if (!recipe) {
      recipe = await fetchRecipeInformation(props.match.params.id);
      localStorage.setItem(`recipe${props.match.params.id}`, JSON.stringify(recipe));
    }
    setRecipe(recipe);
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

  return loading ? (<div className="loader">Loadgin</div>) :
    recipe ?
      <div className="recipe">
        <Link to={{ pathname: '/recipes', searchState: { searchState: search }, category: { category: category } }} className="backLink"> <i className="fas fa-long-arrow-alt-left"></i> Back</Link>
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
            </div>
          </div>
        </div>
        <p className="recipeSummary">{parseHtmlToString(recipe.summary)}</p>
        <div className="recipeMain">
          <Ingredients ingredients={recipe.extendedIngredients} />
          <Instruction instructions={recipe.instructions} analyzedInstructions={recipe.analyzedInstructions} />
        </div >
      </div>
      : null
}

export default Recipe
