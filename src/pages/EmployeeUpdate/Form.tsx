import Input from "../../components/Input/Input.tsx";
import { FormProvider, useForm } from "react-hook-form";
import InputRow from "./form.ts";

function Form() {
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
        <fieldset className="form-details ">
          <legend className="subheading">Personal Information</legend>
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
        </fieldset>
        <button onClick={onSubmit}>Submit Form</button>
      </form>
    </FormProvider>
  );
}
export default Form;
