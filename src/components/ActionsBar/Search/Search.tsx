import SearchWrapper from "./search";
import Button from "../../Button/Button.tsx";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import DataContext from "../../../core/store/DataContext.tsx";
import { handleChange } from "../../../utils/helper.ts";

function Search() {
  const { getValues, setValue, register } = useFormContext();

  const name = "search-text";
  const { addTableProps } = useContext(DataContext);

  return (
    <SearchWrapper className="common-flex">
      <div id="searchForm" className="search-form common-flex">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          className="search-input"
          id="search-input"
          placeholder="Search by name"
          {...register(name, {
            onChange: (e) => {
              handleChange(
                e.target.value,
                "search-text",
                getValues,
                setValue,
                addTableProps
              );
            },
          })}
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
