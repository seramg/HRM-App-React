import { useFormContext } from "react-hook-form";
import { InputProps } from "../../core/interfaces/interface.ts";
import InputError from "../InputError/InputError.tsx";
import RadioGrp from "../Radio/RadioGrp.tsx";
import InputWrapper from "./input.ts";
import { getDate } from "../../utils/helper.ts";
import { useState } from 'react';

function Input({ value, validation, label, type, options, name }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMsg = errors[name];
  const className = errorMsg ? `input-border-error ${label}` : "label";
  if(type==="date" && value){
    value = getDate(value);
  }

  const [currentInputVal]=useState(value);
  
  return (
    <InputWrapper>
      {label}
      {options ? (
        <div className="common-flex radio-list">
          {options.map((option: string) => (
            <RadioGrp
              value={currentInputVal}
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
            defaultValue={currentInputVal}
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
