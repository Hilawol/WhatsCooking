import React, { useState } from 'react'
import { categories } from '../Recipes/utils'
import { Link } from 'react-router-dom'

function CategoryCard({ id, text, image, onClick, searchCatId }) {

  const [showCat, setShowCat] = useState(false);

  const onCatClick = (value) => {
    setShowCat(value);
  }

  const catTitle = text;
  const subCatList = <ul className="categoryCardTextGrid">
    {((categories.find(c => c.id === id)).subCat).map(cat => {
      return <li className="subCat" key={cat} > <Link className="subCat" to={{ pathname: `/recipes/collection/${id}/${cat}`, data: { category: id, subcategory: cat } }} >{cat}</Link>
      </li>
    })}
  </ul>

  return (
    <div className="categoryCard" id={id} onMouseEnter={() => { onCatClick(true) }} onMouseLeave={() => { onCatClick(false) }}>
      <div className="categoryCardImg" style={{ backgroundImage: `url(${image})` }}>
        <div className="categoryCardText" style={{ height: showCat ? "100%" : "6rem" }}> {showCat ? subCatList : catTitle}</div>
      </div>
    </div>
  )
}

export default CategoryCard
