import React from 'react';

const SearchBar = ({id, parentCallBack}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let keyword = document.getElementById('recipeSearch-keyword').value;
        parentCallBack(keyword);
    };

    return (
    <div className="form-container">
      <a href="/foogle" alt="Foogle"><img src={require('../foogle.png')} alt="Foogle" className="logo-foogle"/></a>
      <form id={id} className="search-form" onSubmit={handleSubmit}>
        <input id={function(){return id + '-keyword';}()} type="text" className="search-bar" placeholder="Enter any dish here..." minLength="1" autoComplete="off"/>
        <button id={function(){return id + '-button';}()} type="submit" className="button-style-e">
          Search
        </button>
      </form>
    </div>
    );
};

export default SearchBar;