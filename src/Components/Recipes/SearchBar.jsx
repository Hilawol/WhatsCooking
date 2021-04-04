import React, { useState } from 'react'

function Search({ searchFunc }) {

  const [term, setTerm] = useState("");

  const handleInput = (e) => {
    console.log("input Handler:", e.currentTarget.value);
    setTerm(e.currentTarget.value);
  }

  const onSearch = () => { //TODO: input validation 
    console.log("search for:", term);
    searchFunc(term);
  }

  return (
    <div className="searchDiv">
      <input className="searchInput" placeholder="What do you feel like eating?" onChange={handleInput} value={term}></input>
      <button className="searchBtn" onClick={onSearch}><i class="fas fa-search"></i></button>
    </div>
  )
}

export default Search
