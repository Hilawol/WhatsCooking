import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to="/" className="navBtn">Home</Link>
      <Link to="/recipes" className="navBtn">Recipes</Link>
    </div>
  )
}

export default Header
