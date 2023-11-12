import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/Button/Button.tsx";
import ButtonGrpWrapper from "../../components/Button/buttonGrpWrapper.ts";
import Input from "../../components/Input/Input.tsx";
import SelectList from "../../components/Select/SelectList.tsx";
import {
  getNewEmpId,
  getNewEmployeeDetails,
  resetSelects,
} from "../../utils/helper.ts";
import { Fieldset, InputRow } from "./form.ts";
import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import { Employee, TableProps } from "../../core/interfaces/interface.ts";
import { useLocation } from "react-router-dom";

function Form() {
  const location = useLocation();
  const employee: Employee = location.state;

  const currentDate = new Date().toISOString().split("T")[0];
  const methods = useForm();
  const { employees, tableProps, addTableProps } = useContext(DataContext);

  const onReset = () => {
    const resettedVals: TableProps = {
      ...resetSelects(),
      sort: tableProps.sort,
    };
    methods.reset(resettedVals);
    addTableProps(resettedVals);
  };
  const onSubmit = methods.handleSubmit(() => {
    const newEmpId = getNewEmpId(employees);
    const newEmployee = getNewEmployeeDetails(methods.getValues(), newEmpId);
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
          <Fieldset className="form-details ">
            <legend className="subheading">Personal Information</legend>

            <Input
              value={employee && employee.emp_name}
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
                value={employee && employee.email}
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
                value={employee && employee.phone}
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
              value={employee && employee.address}
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
                value={employee && employee.date_of_birth}
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
                value={employee && employee.date_of_joining}
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
                name="data_of_joining"
              />
            </InputRow>
            <Input
              value={employee && employee.gender}
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
              value={employee}
              control={methods.control}
              isMultiState={{
                isDepartmentsMulti: false,
                isDesignationsMulti: false,
                isEmpModesMulti: false,
                isSkillsMulti: true,
              }}
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
