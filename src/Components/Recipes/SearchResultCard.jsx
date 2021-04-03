import React from 'react'

function SearchResultCard({ recipe, onCardClick }) {
  const { image, title, id } = recipe;
  return (
    <div className="searchResultCard" onClick={onCardClick(id)}>
      <div className="searchResultCardImg" style={{ backgroundImage: `url(${image})` }} ></div>
      <p className="searchResultCardTitle">{title}</p>
    </div>
  )
}

export default SearchResultCard
