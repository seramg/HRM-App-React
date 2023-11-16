import { useContext, useState } from "react";
import DataContext from "../../../core/store/DataContext.tsx";
import Button from "../../Button/Button.tsx";
import SearchWrapper from "./search.ts";
import { TableProps } from "../../../core/interfaces/interface.ts";

function Search() {
  const { addTableProps, tableProps } = useContext(DataContext);
  const [focus, setFocus] = useState(false);
  const fieldVal = tableProps.search_term;
  const [currentSelectVal, setCurrentSelectVal] = useState(fieldVal);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = ({ value }: { value: string }) => {
    let currentTableProps: TableProps = {
      ...tableProps,
      search_term: value,
    };
    setCurrentSelectVal(tableProps.search_term);
    addTableProps(currentTableProps);
  };
  return (
    <SearchWrapper $focus={focus} className="common-flex">
      <div id="searchForm" className="search-form common-flex">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          defaultValue={currentSelectVal ? currentSelectVal : ""}
          className="search-input"
          id="search-input"
          placeholder="Search by name"
          onFocus={handleFocus}
          onChange={(e) => {
            handleChange({ value: e.target.value });
          }}
          onBlur={handleBlur}
        />
      </div>
      <Button icon="expand_more" className="search-btn">
        <p
          id="search-dropdown-btn-text"
          className="search-dropdown-btn-text"
        ></p>
      </Button>
    </SearchWrapper>
  );
}
export default Search;
