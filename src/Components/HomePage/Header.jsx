import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../Assets/logo.png'

function Header() {
  return (
    <div className="header">
      <div className="logo" ></div>
      <Link to="/" className="navBtn">Home</Link>
      <Link to="/recipes" className="navBtn">Recipes</Link>
    </div>
  )
}

export default Header
