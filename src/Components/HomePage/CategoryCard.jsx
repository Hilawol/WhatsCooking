import React from 'react'

function CategoryCard({ id, text }) {
  return (
    <div className="categoryCard" id={id}>
      <div className="categoryCardImg" ></div>
      <p className="categoryCardText">{text}</p>
    </div>
  )
}

export default CategoryCard
