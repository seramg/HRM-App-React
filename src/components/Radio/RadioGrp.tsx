import { useFormContext } from "react-hook-form";
import RadioWrapper from "./radioGrp.ts";

function RadioGrp({
  option,
  label,
  validation,
  name,
  value,
}: {
  option: string;
  label: string;
  validation: {
    required: {
      value: boolean;
      message: string;
    };
  };
  value?: string;
  name: string;
}) {
  const { register } = useFormContext();
  const checked = (value == option);

  
  return (
    <RadioWrapper key={option} className=" common-flex">
      <input
        type="radio"
        id={`${label}-${option}`}
        defaultValue={option} // Specify the value for this radio input
        {...register(name, validation)}
        defaultChecked={checked}
      />
      <label htmlFor={`${label}-${option}`}>{option}</label>
    </RadioWrapper>
  );
}
export default RadioGrp;
