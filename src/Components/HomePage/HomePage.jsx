import React from 'react'
import CategoryCard from '../HomePage/CategoryCard'
import img from '../../Assets/breakfast.jpeg'

function HomePage() {
  return (
    <div className="homePageContent">
      <div className="homePageMainGrid">
        <CategoryCard id="breakfastImg" text="Get new breakfast ideas" />
        <CategoryCard id="breakfastImg" text="Get new breakfast ideas" />
        <CategoryCard id="breakfastImg" text="Get new breakfast ideas" />

      </div>

    </div>
  )
}

export default HomePage
