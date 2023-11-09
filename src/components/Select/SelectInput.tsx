import Select from "react-select";
import InputWrapper from "../Input/input.ts";
import { SelectInputProps } from "../../core/interfaces/interface.ts";
import { Controller, useFormContext } from "react-hook-form";
import InputError from "../InputError/InputError.tsx";

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
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName];
  const className = errorMsg ? `input-border-error ${label}` : "label";

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
        <Select
          className={className}
          isSearchable={true}
          options={options}
          placeholder={<div className="placeholder">{placeholder}</div>}
          isMulti={isMulti!}
        />
      )}
    </InputWrapper>
  );
}

export default SelectInput;
