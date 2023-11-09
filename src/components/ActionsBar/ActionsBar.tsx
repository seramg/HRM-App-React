import ActionsWrapper from "./actionsBar";
import Search from "./Search/Search.tsx";
import Button from "../Button/Button.tsx";
import { FormProvider, useForm } from "react-hook-form";
import SelectList from "../Select/SelectList.tsx";
import { resetSelects } from "../../utils/helper.ts";
import { Employee } from "../../core/interfaces/interface.ts";
import { useState, useEffect } from "react";
import { getData } from "../getData.tsx";
import EmployeeTable from "../EmployeeTable/EmployeeTable.tsx";

function ActionsBar() {
  const methods = useForm();

  const onReset = () => {
    methods.reset();
    resetSelects(methods.reset);
  };

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      const employees = data.employees;

      if (data) {
        setEmployees(data.employees);
      }
    };

    fetchData();
  }, []);

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
      <EmployeeTable employees={employees} />
    </>
  );
}
export default ActionsBar;
