import React from 'react'

function Ingredients({ ingredients }) {
  return (
    <div className="recipeIngredients">
      <h1 className="ingredientsTitle">INGREDIENTS</h1>
      <ul>
        {ingredients.map((i, index) => <li key={`${ingredients.name}${index}`}>{i.original}<hr /></li>)}
      </ul>
    </div>

  )
}

export default Ingredients
