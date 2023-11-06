import Input from "../../components/Input/Input.tsx";
import { FormProvider, useForm } from "react-hook-form";
import { InputRow, Fieldset } from "./form.ts";
import Button from "../../components/Button/Button.tsx";
import SelectDropDown from "../../components/Select/Select.tsx";

function Form() {
  const currentDate = new Date().toISOString().split("T")[0];
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
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
            />
          </InputRow>
        </Fieldset>
        <Fieldset className="other-details ">
          <legend className="subheading">Other Information</legend>
          <InputRow className="details-row common-flex"></InputRow>
          <SelectDropDown
            isMultiState={{
              isDepartmentsMulti: false,
              isDesignationsMulti: false,
              isEmpModesMulti: false,
              isSkillsMulti: true,
            }}
          />
        </Fieldset>
        <Button icon="" onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
export default Form;
