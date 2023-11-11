import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import DataContext from "../../core/store/DataContext.tsx";
import { resetSelects } from "../../utils/helper.ts";
import Button from "../Button/Button.tsx";
import SelectList from "../Select/SelectList.tsx";
import Search from "./Search/Search.tsx";
import ActionsWrapper from "./SearchAndFilter.ts";

function ActionsBar() {
  const methods = useForm();
  const { addTableProps, tableProps } = useContext(DataContext);

  const onReset = () => {
    methods.reset();
    resetSelects(methods.reset);
    if (tableProps) addTableProps(tableProps);
  };
  return (
    <>
      <ActionsWrapper className="common-flex">
        <h2 className="subheading">Filter By:</h2>
        <FormProvider {...methods}>
          <form
            className="global-width common-flex form-flex-align"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
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
          </form>
        </FormProvider>
        <Button icon="" onClick={onReset}>
          Clear
        </Button>
      </ActionsWrapper>
    </>
  );
}
export default ActionsBar;
