import { useFormContext } from "react-hook-form";
import InputWrapper from "./input.ts";
import { InputProps } from "../../core/interfaces/interface.ts";
import InputError from "../InputError/InputError.tsx";
import RadioGrp from "../Radio/RadioGrp.tsx";

function Input({ validation, label, type, options, name }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[name];
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
              name={name}
              validation={validation}
            />
          ))}
        </div>
      ) : (
        <input
          type={type}
          id={label}
          className={`m-30 ${label}`}
          placeholder={`Enter your ${label}`}
          {...register(name, validation)}
        />
      )}
    </InputWrapper>
  );
}

export default Input;
