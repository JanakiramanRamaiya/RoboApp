import React from "react";
import "./search.style.css";
const Search = ({ handler }) => {
  return (
    <div className='search-container'>
      <img src='https://img.icons8.com/pastel-glyph/64/000000/search--v2.png' />
      <input onChange={handler} type='text' />
    </div>
  );
};
export default Search;
