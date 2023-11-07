import Select from "react-select";
import InputWrapper from "../Input/input.ts";
import { SelectInputProps } from "../../core/interfaces/interface.ts";
import {
  Controller,
  useFormContext,
} from "react-hook-form";
import InputError from "../InputError/InputError.tsx";

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
  control,
  fieldName,
}: SelectInputProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName];

  return (
    <InputWrapper>
      <div className="label-heading common-flex">
        {label}
        {errorMsg && <InputError error={errorMsg.message?.toString()} />}
      </div>
      <Controller
        name={fieldName}
        control={control}
        rules={{ required: "This field is required" }} // Add your validation rules here
        render={({ field }) => (
          <Select
            {...field}
            isSearchable={true}
            options={options}
            placeholder={placeholder}
            {...(isMulti ? { isMulti: true } : { isMulti: false })}
          />
        )}
      />
    </InputWrapper>
  );
}

export default SelectInput;
