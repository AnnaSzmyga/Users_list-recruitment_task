import React from 'react';
import './Search.scss';

const Search = ({ searchingText, handleSubmit, handleChange }) => {
  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input
            className="search-input"
            type="text"
            placeholder="Search by user name..."
            onChange={handleChange}
            value={searchingText}
        />
      </form>
  );
}

export default Search;