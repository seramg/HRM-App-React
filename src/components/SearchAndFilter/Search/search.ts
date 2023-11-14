import styled from "styled-components";

const SearchWrapper = styled.div<{ $focus: boolean }>`
  flex: 1;
  background-color: var(--white-color);
  border-radius: 4px;
  padding: 6px;
   border: ${(props) => (props.$focus ? "1px solid  var(--placeholder-color)" : "1px solid #d3d3d3")};

  .material-symbols-outlined,
  .search-dropdown-btn-text {
    margin: 0;
    color: #d3d3d3;
  }

  input:focus {
    border: none;
  }

  .search-form {
    flex: 1;
  }
  .search-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: 0;
    text-decoration: none;
    font-size: 16px;
    color: var(--secondary-color);
    padding: 0;

    &::placeholder {
      color: var(--placeholder-color);
    }
  }
  .search-btn {
    padding: 0;
    gap: 5px !important;
    border-radius: 0;
    background: none;
    border-left: 1px solid #d3d3d3;
    flex-direction: row-reverse;
  }
`;
export default SearchWrapper;
