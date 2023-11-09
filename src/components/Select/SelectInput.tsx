import Select from "react-select";
import InputWrapper from "../Input/input.ts";
import { SelectInputProps } from "../../core/interfaces/interface.ts";
import { Controller, useFormContext } from "react-hook-form";
import InputError from "../InputError/InputError.tsx";
import { useEffect } from 'react';

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
  control,
  fieldName,
  isFilter,
}: SelectInputProps) {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName];
  const className = errorMsg ? `input-border-error ${label}` : "label";

  useEffect(() => {
    console.log(getValues());
  });

  return (
    <InputWrapper>
      {label}
      {!isFilter ? (
        <Controller
          name={fieldName}
          control={control}
          rules={{ required: "This field is required" }} // Add your validation rules here
          render={({ field }) => (
            <div className="input-field-error  m-30">
              <Select
                {...field}
                className={className}
                isSearchable={true}
                options={options}
                placeholder={<div className="placeholder">{placeholder}</div>}
                isMulti={isMulti!}
              />
              {errorMsg && <InputError error={errorMsg.message?.toString()} />}
            </div>
          )}
        />
      ) : (
        <Controller
          name={fieldName}
          control={control}
          render={({ field: { onChange } }) => (
            <Select
              className={className}
              isSearchable={true}
              options={options}
              placeholder={<div className="placeholder">{placeholder}</div>}
              isMulti={isMulti!}
              onChange={(val) => {
                setValue(label, val);
                onChange(val);
              }}
            />
          )}
        />
      )}
    </InputWrapper>
  );
}

export default SelectInput;
function useField(fieldName: string): { setValue: any } {
  throw new Error("Function not implemented.");
}
