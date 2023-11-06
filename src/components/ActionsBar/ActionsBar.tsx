import ActionsWrapper from "./actionsBar";
import Search from "./Search/Search.tsx";
import Button from "../Button/Button.tsx";
import FilterDropdown from "./../FilterDropdown/FilterDropdown.tsx";
import { useState } from "react";

function ActionsBar() {
  const [dropdownShow, setDropdownShow] = useState(false);
  const handleClick = () => setDropdownShow(() => !dropdownShow);

  return (
    <ActionsWrapper className="common-flex">
      <Search />
      <div className="filter-container">
        <Button icon="filter_list" className="filter-btn" onClick={handleClick}>
          Filters
        </Button>
        {dropdownShow && <FilterDropdown />}
      </div>
    </ActionsWrapper>
  );
}
export default ActionsBar;
