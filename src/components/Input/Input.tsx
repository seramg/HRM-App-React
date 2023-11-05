import { FieldErrors, FieldValues, useFormContext } from "react-hook-form";
import InputWrapper from "./input.ts";
import InputError from "./InputError.tsx";

interface InputProps {
  validation: {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
  };
  label: string;
}

function Input({ validation, label }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMsg = errors[label];

  return (
    <InputWrapper>
      <div className="label-heading common-flex">
        {label}
        {errorMsg && (
         <InputError error={errorMsg.message?.toString()} />
        )}
      </div>
      <input
        type="text"
        id={label}
        className={label}
        {...register(label, validation)}
      />
    </InputWrapper>
  );
}
export default Input;
