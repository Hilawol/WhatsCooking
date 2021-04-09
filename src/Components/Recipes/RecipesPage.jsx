import React from 'react'
import CategoryCard from '../HomePage/CategoryCard'
import { categories } from './utils'
import { Link } from 'react-router-dom'

function Recipes(props) {

  return (

    <div>
      <div className="searchStateBtnDiv">
        <input id="collection" className="searchStateBtn currentState" type="button" value="Recipe Collections" />
        <Link to="/recipes/all" className="searchStateBtn">All Recipes</Link>
      </div>
      <div className="categoryGrid">
        {categories.map(c => <CategoryCard key={c.id} id={c.id} text={c.text} image={c.image} />)}
      </div>;
    </div>
  )
}

export default Recipes

