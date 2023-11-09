import ActionsWrapper from "./actionsBar";
import Search from "./Search/Search.tsx";
import Button from "../Button/Button.tsx";
import { FormProvider, useForm } from "react-hook-form";
import SelectList from "../Select/SelectList.tsx";
import { resetSelects } from "../../utils/helper.ts";

function ActionsBar() {
  const methods = useForm();

  const onReset = () => {
    methods.reset();
    resetSelects(methods.reset);
  };

  return (
    <>
      <ActionsWrapper className="common-flex">
        <h2 className="subheading">Filter By:</h2>
        <FormProvider {...methods}>
          <form
            className="global-width"
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
          </form>
        </FormProvider>
        <Search />
        <Button icon="" onClick={onReset}>
          Clear
        </Button>
      </ActionsWrapper>
    </>
  );
}
export default ActionsBar;
