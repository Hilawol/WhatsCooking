import React from 'react'
import { Link } from 'react-router-dom'
import SearchResultCard from './SearchResultCard'

function RecipesList({ recipes, searchState, category }) {

  const onRecipeClick = (id) => {
  }

  return (
    <div className="recipesGrid">
      { recipes.map(r => <Link key={r.id} to={{ pathname: `/recipes/${r.id}`, searchState: { searchState: searchState }, category: { category: category } }}>
        <SearchResultCard recipe={r} onRecipeClick={() => onRecipeClick} /></Link>)}
    </div>
  )
}

export default RecipesList
