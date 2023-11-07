import { useFormContext } from "react-hook-form";
import InputWrapper from "./input.ts";
import { InputProps } from "../../core/interfaces/interface.ts";
import InputError from "../InputError/InputError.tsx";
import RadioGrp from "../Radio/RadioGrp.tsx";

function Input({ validation, label, type, options }: InputProps) {
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
      {options ? (
        <div className="common-flex radio-list">
          {options.map((option: string) => (
            <RadioGrp
              key={option}
              option={option}
              label={label}
              validation={validation}
            />
          ))}
        </div>
      ) : (
        <input
          type={type}
          id={label}
          className={label}
          {...register(label, validation)}
        />
      )}
    </InputWrapper>
  );
}

export default Input;
