import React from 'react';
import './Search.scss';

const Search = ({ searchingText, handleSubmit, handleChange }) => {
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Search by user name..."
            onChange={handleChange}
            value={searchingText}
        />
      </form>
    </div>
  );
}

export default Search;