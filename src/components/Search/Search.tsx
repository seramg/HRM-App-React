import React from "react";
import SearchWrapper from "./search";
import Button from "../Button/Button.tsx";

function Search() {
  return (
    <SearchWrapper className="common-flex">
      <div id="searchForm" className="search-form common-flex">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          className="search-input"
          id="search-input"
          placeholder="Search"
        />
      </div>
      <Button icon="expand_more" className="search_btn">
        <p
          id="search-dropdown-btn-text"
          className="search-dropdown-btn-text"
        ></p>
      </Button>
    </SearchWrapper>
  );
}
export default Search;
