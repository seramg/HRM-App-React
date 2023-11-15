import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import DataContext from "../../../core/store/DataContext.tsx";
import Button from "../../Button/Button.tsx";
import SearchWrapper from "./search.ts";
import { TableProps } from "reactstrap";
import { resetSelects } from "../../../utils/helper.ts";

function Search() {
  // const { getValues, setValue, register } = useFormContext();
  const name = "search_term";
  const { addTableProps, tableProps } = useContext(DataContext);
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = ({ value }: { value: string }) => {
    let currentTableProps: TableProps = {
      ...resetSelects(),
      sort: tableProps.sort,
    };
    console.log(currentTableProps)
    // Object.keys(currentFilters).forEach((key: string) => {
    //   if (
    //     key === "department" ||
    //     key === "designation" ||
    //     key === "skills" ||
    //     key === "employment_mode" ||
    //     key === "search_term"
    //   ) {
    //     currentTableProps[key] = currentFilters[key];
    //   }
    // });
    // const updatedFilters: TableProps = {
    //   ...currentTableProps,
    //   [fieldName]: value,
    // };
    // Object.keys(updatedFilters).forEach((key: string) => {
    //   const tablePropsKey = key as keyof TableProps;
    //   setValue(key, updatedFilters[tablePropsKey]);
    // });

    // addTableProps(updatedFilters);
  }
  return (
    <SearchWrapper $focus={focus} className="common-flex">
      <div id="searchForm" className="search-form common-flex">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          className="search-input"
          id="search-input"
          placeholder="Search by name"
          onFocus={handleFocus}
          onChange={(e) => {
            handleChange({ value: e.target.value })
          }}
        // {...register(name, {
        //   onChange: (e) => {
        //     handleChange(
        //       e.target.value,
        //     );
        //   },
        //   onBlur: () => {
        //     handleBlur();
        //   },
        // })}
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
