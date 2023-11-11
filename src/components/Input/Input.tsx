import { useFormContext } from "react-hook-form";
import { InputProps } from "../../core/interfaces/interface.ts";
import InputError from "../InputError/InputError.tsx";
import RadioGrp from "../Radio/RadioGrp.tsx";
import InputWrapper from "./input.ts";

function Input({ validation, label, type, options, name }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[name];
  const className = errorMsg ? `input-border-error ${label}` : "label";
  return (
    <InputWrapper>
      {label}
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
        <div className="input-field-error  m-30">
          <input
            type={type}
            id={label}
            className={className}
            placeholder={`Enter your ${label}`}
            {...register(name, validation)}
          />
          {errorMsg && <InputError error={errorMsg.message?.toString()} />}
        </div>
      )}
    </InputWrapper>
  );
}

export default Input;
