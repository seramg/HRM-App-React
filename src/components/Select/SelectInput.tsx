import Select from "react-select";
import InputWrapper from "../Input/input.ts";
import {
  SelectInputProps,
} from "../../core/interfaces/interface.ts";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import InputError from "../InputError/InputError.tsx";
import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import { handleChange } from "../../utils/helper.ts";

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
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName];
  const className = errorMsg ? `input-border-error ${label}` : "label";
  const { addTableProps } = useContext(DataContext);

  return (
    <InputWrapper>
      {label}
      <Controller
        name={fieldName}
        control={control}
        rules={!isFilter ? { required: "This field is required" } : {}}
        render={({ field }) => (
          <>
            {!isFilter ? (
              <div className="input-field-error  m-30">
                <Select
                  {...field}
                  className={className}
                  isSearchable={true}
                  options={options}
                  placeholder={<div className="placeholder">{placeholder}</div>}
                  isMulti={isMulti || false}
                />
                {errorMsg && (
                  <InputError error={errorMsg.message?.toString()} />
                )}
              </div>
            ) : (
              <Select
                {...field}
                className={className}
                isSearchable={true}
                options={options}
                placeholder={<div className="placeholder">{placeholder}</div>}
                isMulti={isMulti || false}
                onChange={(selectedOption) =>
                  handleChange(selectedOption, fieldName,getValues,setValue,addTableProps)
                }
              />
            )}
          </>
        )}
      />
    </InputWrapper>
  );
}

export default SelectInput;
