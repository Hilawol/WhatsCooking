import React from 'react'
import { Link } from 'react-router-dom'


function Recipe(props) {
  const { recipe } = props.location.state;
  console.log("in recipe:", recipe);
  return (
    <div className="recipe">
      <Link to="/recipes">Back to search results...</Link>
      <br />
      <div className="recipeHero">
        <div className="recipeImg" style={{ backgroundImage: `url(${recipe.image})` }}></div>
        <div className="recipeHeroText">
          <h1 className="recipeTitle">{recipe.title}</h1>
          <br />
          <span>Prep time:{recipe.readyInMinutes} Servings:{recipe.servings}</span>
          <br />
          <p>{recipe.summary}</p>
        </div>
      </div>
      <div>{recipe.instructions}</div>
    </div>
  )
}

export default Recipe
