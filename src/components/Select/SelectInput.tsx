import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { Employee, SelectProps } from "../../core/interfaces/interface.ts";
import InputWrapper from "../Input/input.ts";
import InputError from "../InputError/InputError.tsx";
import selectStyles from "./selectCustomStyles.ts";

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
  fieldName,
}: {
  label: string;
  options: SelectProps[];
  placeholder: string;
  isMulti?: boolean;
  fieldName: keyof Employee;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName];
  const className = errorMsg ? `input-border-error ${label}` : "label";

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
                isClearable={true}
                className={className}
                isSearchable={true}
                options={options}
                placeholder={<div className="placeholder">{placeholder}</div>}
                isMulti={isMulti || false}
                styles={selectStyles}
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
