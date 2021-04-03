import React from 'react'
import { Link } from 'react-router-dom'
import SearchResultCard from './SearchResultCard'

function RecipesList({ recipes }) {

  const onRecipeClick = (id) => {
    console.log("user clicked on reciep:", id);
  }

  return (
    <div className="recipesGrid">
      {recipes.map(r => <Link to={`/recipes/${r.id}`}><SearchResultCard key={r.id} recipe={r} onCardClick={() => onRecipeClick} /></Link>)}
    </div>
  )
}

export default RecipesList
