import React from 'react'
import { Link } from 'react-router-dom'
import SearchResultCard from './SearchResultCard'

function RecipesList({ recipes }) {

  const onRecipeClick = (id) => {
    console.log("user clicked on reciep:", id);
  }

  console.log("recipelist: recipes", recipes);
  return (
    <div className="recipesGrid">
      {recipes.map(r => <Link key={r.id} to={{ pathname: `/recipes/${r.id}}`, state: { recipe: r, } }}>
        <SearchResultCard recipe={r} onRecipeClick={() => onRecipeClick} /></Link>)}
        RecipeList
    </div>
  )
}

export default RecipesList
