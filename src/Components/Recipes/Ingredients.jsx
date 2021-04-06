import React from 'react'

function Ingredients({ ingredients }) {
  return (
    <div className="recipeIngredients">
      <h1 className="ingredientsTitle">INGREDIENTS</h1>
      <ul>
        {ingredients.map(i => <li key={ingredients.id}>{i.original}<hr /></li>)}
      </ul>
    </div>

  )
}

export default Ingredients
