import { useFormContext } from "react-hook-form";
import InputWrapper from "./input.ts";
import InputError from "./InputError.tsx";

interface InputProps {
  validation: {
    required: {
      value: boolean;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };

  };
  label: string;
  type: string;
}

function Input({ validation, label,type }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[label];

  return (
    <InputWrapper>
      <div className="label-heading common-flex">
        {label}
        {errorMsg && <InputError error={errorMsg.message?.toString()} />}
      </div>
      <input
        type={type}
        id={label}
        className={label}
        {...register(label, validation)}
      />
    </InputWrapper>
  );
}
export default Input;
