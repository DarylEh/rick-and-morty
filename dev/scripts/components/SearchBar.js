import React from 'react';
import ReactDOM from 'react-dom';

const SearchBar = (props) => {
    return (
        <div>
            <label htmlFor="searchTerm">Search Here </label>
            <input type="text" id="searchTerm" name="searchTerm" onChange={props.handleChange} />
        </div>
    )
};
export default SearchBar;