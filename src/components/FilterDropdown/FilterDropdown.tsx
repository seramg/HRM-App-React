import Button from "../Button/Button.tsx";
import ButtonGrpWrapper from "../Button/buttonGrpWrapper.ts";
import SelectList from "../Select/SelectList.tsx";
import FilterDropdownWrapper from "./filterDropdown.ts";

function FilterDropdown() {
  return (
    <FilterDropdownWrapper>
      <h2 className=" head-row dropdown-row">Filter List</h2>
      <SelectList
        isMultiState={{
          isDepartmentsMulti: true,
          isDesignationsMulti: true,
          isEmpModesMulti: true,
          isSkillsMulti: true,
        }}
      />
      <ButtonGrpWrapper>
        <Button icon="">Reset</Button>
        <Button icon="">Save</Button>
      </ButtonGrpWrapper>
    </FilterDropdownWrapper>
  );
}

export default FilterDropdown;
