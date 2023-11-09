import ActionsWrapper from "./actionsBar";
import { useState } from "react";
import Filters from "./../FilterDropdown/Filters.tsx";
import Search from "./Search/Search.tsx";
import Button from "../Button/Button.tsx";

function ActionsBar() {
  return (
    <ActionsWrapper className="common-flex">
      {/* 
      <div className="filter-container">
        <Button icon="filter_list" className="filter-btn" onClick={handleClick}>
          Filters
        </Button>
        {filterShow && <FilterDropdown />}
      </div> */}
      <Filters />
      <Search />
      <Button icon="" onClick={()=>{}}>
        Clear
      </Button>
    </ActionsWrapper>
  );
}
export default ActionsBar;
