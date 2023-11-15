import { useForm } from "react-hook-form";
import Button from "../Button/Button.tsx";
import SelectList from "../Select/SelectList.tsx";
import Search from "./components/Search.tsx";
import ActionsWrapper from "./SearchAndFilter.ts";
import { resetSelects } from "../../utils/helper.ts";
import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import { TableProps } from "../../core/interfaces/interface.ts";

function ActionsBar() {
  const methods = useForm();
  const { tableProps, addTableProps } = useContext(DataContext);

  const onReset = () => {
    const resettedVals: TableProps = {
      ...resetSelects(),
      sort: tableProps.sort,
    };
    methods.reset(resettedVals);
    addTableProps(resettedVals);
  };
  return (
    <>
      <ActionsWrapper className="common-flex">
        <h2 className="subheading filter-title">Filter By:</h2>
        <div className="global-width common-flex form-flex-align">
          <SelectList
            control={methods.control}
            isFilter={true}
            isMultiState={{
              isDepartmentsMulti: false,
              isDesignationsMulti: false,
              isEmpModesMulti: false,
              isSkillsMulti: true,
            }}
          />
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
