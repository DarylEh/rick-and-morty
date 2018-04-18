import React from 'react';
import ReactDOM from 'react-dom';

const SearchBar = (props) => {
    return (
        <div>
            <label htmlFor="searchTerm" className="visuallyhidden" >Search Here </label>
            <input type="text" placeholder="Search Here..." id="searchTerm" name="searchTerm" onChange={props.handleChange} />
        </div>
    )
};
export default SearchBar;