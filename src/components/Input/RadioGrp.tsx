import { useFormContext } from "react-hook-form";

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
    formState: { errors },
  } = useFormContext();

  return (
    <div key={option} className="common-flex radio-grp">
      <input
        type="radio"
        id={`${label}-${option}`}
        name={label} // Set the same name for all radio inputs in the group
        value={option} // Specify the value for this radio input
        {...register(label, validation)}
      />
      <label htmlFor={`${label}-${option}`}>{option}</label>
    </div>
  );
}
export default RadioGrp;
