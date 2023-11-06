import styled from "styled-components";

const FilterDropdownWrapper = styled.section`
  z-index: 1;
  background-color: white;
  border: 1px solid var(--secondary-color);
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: 10px;
  min-width: 520px;

  label {
    padding: 16px;
  }
  .dropdown-row{
    border-bottom: 1px solid var(--secondary-color);
    padding: 10px;
  }
`;
export default FilterDropdownWrapper;
