import { useForm, FormProvider } from "react-hook-form";
import SelectList from "../Select/SelectList.tsx";
import { resetSelects } from "../../utils/helper.ts";

function Filters() {
  const methods = useForm();

  const onReset = () => {
    methods.reset();
    resetSelects(methods.reset);
  };
  const onSubmit = methods.handleSubmit(() => {
    onReset();
  });

  return (
    <>
      <h2 className="subheading" >Filter By:</h2>
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
              isDepartmentsMulti: false,
              isDesignationsMulti: false,
              isEmpModesMulti: false,
              isSkillsMulti: true,
            }}
          />
        </form>
      </FormProvider>
     </>
  );
}

export default Filters;
