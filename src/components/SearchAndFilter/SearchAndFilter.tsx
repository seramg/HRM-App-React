import Button from "../Button/Button.tsx";
import SearchBar from "./components/SearchBar.tsx";
import ActionsWrapper from "./SearchAndFilter.ts";
import { resetFiltersAndSearchBar } from "../../utils/helper.ts";
import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import { TableProps } from "../../core/interfaces/interface.ts";
import FilterSelectList from "./components/FilterSelectList.tsx";

function ActionsBar() {
  const { tableProps, addTableProps } = useContext(DataContext);

  const onReset = () => {
    const resettedVals: TableProps = {
      ...resetFiltersAndSearchBar(), // reset the select dropdowns + search bar
      sort: tableProps.sort, // maintaining the sort as it is
    };
    addTableProps(resettedVals);
  };

  return (
    <>
      <ActionsWrapper className="common-flex">
        <h2 className="subheading filter-title">Filter By:</h2>
        <div className="global-width common-flex form-flex-align">
          <FilterSelectList />
          <SearchBar />
        </div>
        <Button icon="" onClick={onReset}>
          Clear
        </Button>
      </ActionsWrapper>
    </>
  );
}
export default ActionsBar;
