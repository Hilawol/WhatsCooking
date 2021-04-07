import React, { useState } from 'react'

function Search({ onSearchbarClick }) {

  const [term, setTerm] = useState("");

  const handleInput = (e) => {
    setTerm(e.currentTarget.value);
  }

  const onSearch = () => { //TODO: input validation 
    console.log("search for:", term);
    onSearchbarClick(term);
    setTerm("");
  }

  return (
    <div className="searchDiv">
      <input className="searchInput" placeholder="What do you feel like eating?" onChange={handleInput} value={term}></input>
      <button className="searchBtn" ><i className="fas fa-search" onClick={onSearch}></i></button>
    </div>
  )
}

export default Search
