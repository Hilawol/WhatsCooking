import React from 'react'
import { Link } from 'react-router-dom'


function Recipe(props) {
  const { recipe } = props.location.state;
  console.log("in recipe:", recipe);
  return (
    <div className="recipe">
      <Link to="/recipes"> <i class="fas fa-long-arrow-alt-left"></i> Back</Link>
      <br />
      <div className="recipeHero">
        <div className="recipeImg" style={{ backgroundImage: `url(${recipe.image})` }}></div>
        <div className="recipeHeroText">
          <h1 className="recipeTitle">{recipe.title}</h1>
          <br />
          <span><i class="fas fa-stopwatch"></i> {recipe.readyInMinutes}&nbsp;min&nbsp;&nbsp;&nbsp; <i class="fas fa-utensils"></i> {recipe.servings}</span>
          <br />
          <p>{recipe.summary}</p>
        </div>
      </div>
      <div>{recipe.instructions}</div>
    </div>
  )
}

export default Recipe
