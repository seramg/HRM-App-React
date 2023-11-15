import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { SelectInputProps } from "../../core/interfaces/interface.ts";
import InputWrapper from "../Input/input.ts";
import InputError from "../InputError/InputError.tsx";
import selectStyles from "./selectCustomStyles.ts";

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
  control,
  fieldName,
  value,
}: SelectInputProps) {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName];
  const className = errorMsg ? `input-border-error ${label}` : "label";
  const [currentSelectVal, setCurrentSelectVal] = useState(value);

  useEffect(() => {
    if (value) {
      setValue(fieldName, currentSelectVal);
    }
  }, []);

  return (
    <InputWrapper>
      {label}
      <Controller
        name={fieldName}
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <>
            <div className="input-field-error  m-30">
              <Select
                {...field}
                defaultValue={currentSelectVal}
                isClearable={true}
                className={className}
                isSearchable={true}
                options={options}
                placeholder={<div className="placeholder">{placeholder}</div>}
                isMulti={isMulti || false}
                styles={selectStyles}
                onChange={(selectedOption) => {
                  setCurrentSelectVal(selectedOption);
                  setValue(fieldName, selectedOption);
                }}
              />
              {errorMsg && <InputError error={errorMsg.message?.toString()} />}
            </div>
          </>
        )}
      />
    </InputWrapper>
  );
}

export default SelectInput;
