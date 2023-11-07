import { useForm, FormProvider } from "react-hook-form";
import Button from "../Button/Button.tsx";
import ButtonGrpWrapper from "../Button/buttonGrpWrapper.ts";
import SelectList from "../Select/SelectList.tsx";
import FilterDropdownWrapper from "./filterDropdown.ts";
import { resetSelects } from "../../utils/helper.ts";

function FilterDropdown() {
  const methods = useForm();

  const onReset = () => {
    methods.reset();
    resetSelects(methods.reset);
  };
  const onSubmit = methods.handleSubmit(() => {
    onReset();
  });

  return (
    <FilterDropdownWrapper>
      <h2 className=" head-row dropdown-row">Filter List</h2>
      <FormProvider {...methods}>
        <form
          className="global-width"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <SelectList
            control={methods.control}
            isFilter= {true}
            isMultiState={{
              isDepartmentsMulti: true,
              isDesignationsMulti: true,
              isEmpModesMulti: true,
              isSkillsMulti: true,
            }}
          />
          <ButtonGrpWrapper>
            <Button icon="" onClick={onReset}>
              Reset
            </Button>
            <Button icon="" onClick={onSubmit}>
              Apply All
            </Button>
          </ButtonGrpWrapper>
        </form>
      </FormProvider>
    </FilterDropdownWrapper>
  );
}

export default FilterDropdown;
