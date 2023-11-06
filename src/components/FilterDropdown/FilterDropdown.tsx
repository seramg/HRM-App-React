import FilterDropdownWrapper from "./filterDropdown.ts";

function FilterDropdown(show: { show: boolean }) {
  return (
    <FilterDropdownWrapper>
      <h2 className="subheading head-row dropdown-row">Filter List</h2>
    </FilterDropdownWrapper>
  );
}

export default FilterDropdown;
