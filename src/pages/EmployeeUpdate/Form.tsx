import Input from "../../components/Input/Input.tsx";
import { FormProvider, useForm } from "react-hook-form";

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
          />
        </fieldset>
        <button onClick={onSubmit}>Submit Form</button>
      </form>
    </FormProvider>
  );
}
export default Form;
