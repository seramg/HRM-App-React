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
      <Button icon="filter_list" className="filter-btn" onClick={handleClick}>
        Filters
      </Button>
      {dropdownShow && <FilterDropdown show={dropdownShow} />}
    </ActionsWrapper>
  );
}
export default ActionsBar;
