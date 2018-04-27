import React from "react";
//search bar component that takes in handleChange prop and runs handleChange funtion in App
const SearchBar = props => {
  return (
    <div className="main-display-list-search">
      <label htmlFor="searchTerm" className="visuallyhidden">
        Search Here{" "}
      </label>
      <input
        type="text"
        placeholder="Search Here..."
        id="searchTerm"
        name="searchTerm"
        onChange={props.handleChange}
      />
    </div>
  );
};
export default SearchBar;
