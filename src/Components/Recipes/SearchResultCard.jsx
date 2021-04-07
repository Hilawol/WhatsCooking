import React from 'react'

function SearchResultCard({ recipe, onRecipeClick }) {
  // console.log("searchResultCard: recipe:", recipe);
  const { image, title } = recipe;
  return (
    <div className="searchResultCard" onClick={onRecipeClick(recipe)}>
      <div className="searchResultCardImg" style={{ backgroundImage: `url(${image})` }} ></div>
      <p className="searchResultCardTitle">{title}</p>
    </div>
  )
}

export default SearchResultCard
