import React from 'react'

function CategoryCard({ id, text, image, onClick }) {
  return (
    <div className="categoryCard" id={id} onClick={() => onClick(id)}>
      <div className="categoryCardImg" style={{ backgroundImage: `url(${image})` }}>
        <p className="categoryCardText">{text}</p>
      </div>

    </div>
  )
}

export default CategoryCard
