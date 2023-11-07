import { useFormContext } from "react-hook-form";
import RadioWrapper from "./radioGrp.ts";

function RadioGrp({
  option,
  label,
  validation,
}: {
  option: string;
  label: string;
  validation: {
    required: {
      value: boolean;
      message: string;
    };
  };
}) {
  const {
    register,
  } = useFormContext();

  return (
    <RadioWrapper key={option} className="common-flex">
      <input
        type="radio"
        id={`${label}-${option}`}
        value={option} // Specify the value for this radio input
        {...register(label, validation)}
      />
      <label htmlFor={`${label}-${option}`}>{option}</label>
    </RadioWrapper>
  );
}
export default RadioGrp;
