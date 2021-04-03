import React from 'react'
import SearchResultCard from './SearchResultCard'

function RecipesList({ recipes }) {

  const onRecipeClick = (id) => {
    console.log("user clicked on reciep:", id);
  }

  return (
    <div className="recipesGrid">
      {recipes.map(r => <SearchResultCard key={r.id} recipe={r} onCardClick={() => onRecipeClick} />)}
    </div>
  )
}

export default RecipesList
