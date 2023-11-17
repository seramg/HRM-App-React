import Button from "../Button/Button.tsx";
import Search from "./components/Search.tsx";
import ActionsWrapper from "./SearchAndFilter.ts";
import { resetSelects } from "../../utils/helper.ts";
import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import { TableProps } from "../../core/interfaces/interface.ts";
import SelectFilterList from "./components/SelectFilterList.tsx";

function ActionsBar() {
  const { tableProps, addTableProps } = useContext(DataContext);

  const onReset = () => {
    const resettedVals: TableProps = {
      ...resetSelects(),
      sort: tableProps.sort,
    };
    addTableProps(resettedVals);
  };
  return (
    <>
      <ActionsWrapper className="common-flex">
        <h2 className="subheading filter-title">Filter By:</h2>
        <div className="global-width common-flex form-flex-align">
          <SelectFilterList />
          <Search />
        </div>
        <Button icon="" onClick={onReset}>
          Clear
        </Button>
      </ActionsWrapper>
    </>
  );
}
export default ActionsBar;
