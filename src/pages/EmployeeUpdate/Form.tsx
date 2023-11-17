import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/Button/Button.tsx";
import ButtonGrpWrapper from "../../components/Button/buttonGrpWrapper.ts";
import Input from "../../components/Input/Input.tsx";
import SelectList from "../../components/Select/SelectList.tsx";
import {
  convertToFormEmployee,
  defaultFormVal,
  getNewEmpId,
  getNewEmployeeDetails,
  getUrlType,
  resetSelects,
} from "../../utils/helper.ts";
import { Fieldset, InputRow } from "./form.ts";
import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import { Employee, FormEmployee, TableProps } from "../../core/interfaces/interface.ts";
import { useLocation, useSearchParams } from "react-router-dom";

function Form() {
  const { employees, tableProps, addTableProps } = useContext(DataContext);
  const location = useLocation();
  const urlType = getUrlType(location.pathname);


  const defaultValues = defaultFormVal();

  const [searchParams] = useSearchParams();

  let employeeId: string | null, employee: Employee | undefined, formEmployee: FormEmployee;
  if (urlType === "edit-employee") {
    employeeId = searchParams.get("employeeId");
    employee = employees.find((employee) => employee.id === employeeId);
    if (employee)
      formEmployee = convertToFormEmployee(employee)
    else
      formEmployee = defaultValues;
  }
  else {
    employeeId = null;
    formEmployee = defaultValues;
  }

  const currentDate = new Date().toISOString().split("T")[0];

  const methods = useForm<FormEmployee>({
    defaultValues: formEmployee
  });

  const onReset = () => {
    const resettedTableProps: TableProps = {
      ...resetSelects(),
      sort: tableProps.sort,
    };
    methods.reset(defaultValues);
    addTableProps(resettedTableProps);
  };

  const onSubmit = methods.handleSubmit(() => {
    let empId;
    if (employee) empId = employee.id
    else
      empId = getNewEmpId(employees);
    const newEmployee = getNewEmployeeDetails(methods.getValues(), empId);
    console.log(newEmployee);
  });
  return (
    <main className="main-section global-width">
      <FormProvider {...methods}>
        <form
          className="global-width"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <h2>{!employee ? "Add New Employee" : `Edit Employee ${employee.id}`}</h2>
          <Fieldset className="form-details ">
            <legend className="subheading">Personal Information</legend>

            <Input
              validation={{
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: RegExp("^[A-Za-z ]*[A-Za-z][A-Za-z ]*$"),
                  message: "This is an invalid value",
                },
                minLength: {
                  value: 2,
                  message: "min 2 characters",
                },
              }}
              label="Name"
              type="text"
              name="emp_name"
            />
            <InputRow className="common-flex">
              <Input
                validation={{
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
                    message: "This is an invalid value",
                  },
                }}
                label="Email"
                type="email"
                name="email"
              />
              <Input
                validation={{
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: RegExp("^[0-9]{10}$"),
                    message:
                      "Phone number must be 10 digits with no alphabets.",
                  },
                }}
                label="Phone Number"
                type="tel"
                name="phone"
              />
            </InputRow>
            <Input
              validation={{
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 2,
                  message: "min 2 characters",
                },
              }}
              label="Address"
              type="textarea"
              name="address"
            />
            <InputRow className="common-flex">
              <Input
                validation={{
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  max: {
                    value: currentDate,
                    message: "This is an invalid value",
                  },
                }}
                label="Date of Birth"
                type="date"
                name="date_of_birth"
              />
              <Input
                validation={{
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  max: {
                    value: currentDate,
                    message: "This is an invalid value",
                  },
                }}
                label="Date of Joining"
                type="date"
                name="date_of_joining"
              />
            </InputRow>
            <Input
              validation={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              label="Gender"
              type="radio"
              options={["Male", "Female", "Other"]}
              name="gender"
            />
          </Fieldset>
          <Fieldset className="other-details ">
            <legend className="subheading">Other Information</legend>
            <SelectList
            />
          </Fieldset>
          <ButtonGrpWrapper>
            <Button icon="" onClick={onReset}>
              Clear
            </Button>
            <Button icon="" onClick={onSubmit}>
              Submit
            </Button>
          </ButtonGrpWrapper>
        </form>
      </FormProvider>
    </main>
  );
}
export default Form;
