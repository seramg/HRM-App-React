import { useContext, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { SelectInputProps } from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import { handleChange } from "../../utils/helper.ts";
import InputWrapper from "../Input/input.ts";
import InputError from "../InputError/InputError.tsx";

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
  control,
  fieldName,
  isFilter,
  value,
}: SelectInputProps) {
  const {
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName];
  const className = errorMsg ? `input-border-error ${label}` : "label";
  const { addTableProps, tableProps } = useContext(DataContext);
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
        rules={!isFilter ? { required: "This field is required" } : {}}
        render={({ field }) => (
          <>
            {!isFilter ? (
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
                  onChange={(selectedOption) => {
                    setCurrentSelectVal(selectedOption);
                    setValue(fieldName, selectedOption);
                  }}
                />
                {errorMsg && (
                  <InputError error={errorMsg.message?.toString()} />
                )}
              </div>
            ) : (
              <Select
                {...field}
                isClearable={true}
                className={className}
                isSearchable={true}
                options={options}
                placeholder={<div className="placeholder">{placeholder}</div>}
                isMulti={isMulti || false}
                onChange={(selectedOption) =>
                  handleChange(
                    selectedOption,
                    fieldName,
                    getValues,
                    setValue,
                    tableProps,
                    addTableProps
                  )
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
