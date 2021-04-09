import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="header">
      <div className="logo" ></div>
      <Link to="/" className={`navBtn${currentTab === "home" ? ' currentTab' : ''}`} onClick={() => { setCurrentTab("home") }}>Home</Link>
      <Link to="/recipes" className={`navBtn${currentTab === "recipes" ? ' currentTab' : ''}`} onClick={() => { setCurrentTab("recipes") }}>Recipes</Link>
    </div>
  )
}

export default Header
