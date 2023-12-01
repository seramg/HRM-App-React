import styled from "styled-components";
import colors from "../../../../../core/constants/colors";

const SearchWrapper = styled.div<{ $focus: boolean }>`
  min-width: 200px;
  flex: 1;
  background-color: ${colors.WHITE_COLOR};
  border-radius: 4px;
  padding: 6px;
  border: ${(props) =>
    props.$focus
      ? `1px solid  ${colors.DARK_GRAY_COLOR}`
      : `1px solid ${colors.LIGHT_GRAY_COLOR}`};

  .material-symbols-outlined {
    color: ${(props) =>
      props.$focus ? `${colors.SECONDARY_COLOR}` : colors.DARK_GRAY_COLOR};
  }
  .search-dropdown-btn-text {
    margin: 0;
    color: ${(props) =>
      props.$focus ? `${colors.SECONDARY_COLOR}` : colors.DARK_GRAY_COLOR};
    font-weight: 700;
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
    color: ${colors.SECONDARY_COLOR};
    padding: 0;

    &::placeholder {
      color: ${colors.DARK_GRAY_COLOR};
    }
  }
  .search-btn {
    padding: 5px;
    gap: 5px !important;
    border-radius: 0;
    background: none;
    border-left: 1px solid ${colors.LIGHT_GRAY_COLOR};
    flex-direction: row-reverse;
  }
`;
export default SearchWrapper;
