import React, { useState } from 'react'
import { categories } from '../Recipes/utils'

function CategoryCard({ id, text, image, onClick, searchCatId }) {

  const [showCat, setShowCat] = useState(false);

  const onCatClick = () => {
    console.log("toggleShowCat", showCat);
    setShowCat(!showCat);
  }

  console.log((categories.find(c => c.id === id)).subCat);

  const catTitle = text;
  const subCatList = <ul className="categoryCardTextGrid">
    {((categories.find(c => c.id === id)).subCat).map(cat => { return <li key={cat}>{cat}</li> })}
  </ul>

  return (
    <div className="categoryCard" id={id} onMouseEnter={() => { onCatClick() }} onMouseLeave={() => { onCatClick() }}>
      <div className="categoryCardImg" style={{ backgroundImage: `url(${image})` }}>
        <div className="categoryCardText" style={{ height: showCat ? "100%" : "6rem" }}> {showCat ? subCatList : catTitle}</div>

      </div>
    </div>
  )
}

export default CategoryCard
