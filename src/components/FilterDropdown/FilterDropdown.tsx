import SelectDropDown from "../Select/Select.tsx";
import FilterDropdownWrapper from "./filterDropdown.ts";

function FilterDropdown() {
  return (
    <FilterDropdownWrapper>
      <h2 className=" head-row dropdown-row">Filter List</h2>
      <SelectDropDown isMultiState={{ isDepartmentsMulti: true, isDesignationsMulti: true, isEmpModesMulti: true, isSkillsMulti: true }} />
    </FilterDropdownWrapper>
  );
}

export default FilterDropdown;
