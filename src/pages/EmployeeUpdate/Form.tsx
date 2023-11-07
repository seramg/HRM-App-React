import Input from "../../components/Input/Input.tsx";
import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { InputRow, Fieldset } from "./form.ts";
import Button from "../../components/Button/Button.tsx";
import SelectList from "../../components/Select/SelectList.tsx";
import ButtonGrpWrapper from "../../components/Button/buttonGrpWrapper.ts";
import { resetSelects } from "../../utils/helper.ts";

function Form() {
  const currentDate = new Date().toISOString().split("T")[0];
  const methods = useForm();

  const onReset = () => {
    methods.reset();
    resetSelects(methods.reset);
  };
  const onSubmit = methods.handleSubmit((data) => {
    onReset();
  });

  return (
    <FormProvider {...methods}>
      <form
        className="global-width"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <Fieldset className="form-details ">
          <legend className="subheading">Personal Information</legend>
          <Input
            validation={{
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: RegExp("^[A-Za-z ]*[A-Za-z][A-Za-z ]*$"),
                message: "invalid value",
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
          <InputRow className="details-row common-flex">
            <Input
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
                pattern: {
                  value: RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
                  message: "invalid value",
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
                  message: "required",
                },
                pattern: {
                  value: RegExp("^[0-9]{10}$"),
                  message: "Phone number must be 10 digits with no alphabets.",
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
                message: "required",
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
          <InputRow className="details-row common-flex">
            <Input
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
                max: {
                  value: currentDate,
                  message: "invalid value",
                },
              }}
              label="Date"
              type="date"
              name="date_of_birth"
            />
            <Input
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
              label="Gender"
              type="radio"
              options={["Male", "Female", "Other"]}
              name="gender"
            />
          </InputRow>
        </Fieldset>
        <Fieldset className="other-details ">
          <legend className="subheading">Other Information</legend>
          <SelectList
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
  );
}
export default Form;
