import { useContext, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select, { CSSObjectWithLabel, ControlProps, StylesConfig } from "react-select";
import { SelectInputProps, SelectProps } from "../../core/interfaces/interface.ts";
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

  const selectStyles: StylesConfig<SelectProps> = {
    control: (base: CSSObjectWithLabel, state: ControlProps<SelectProps>) => ({
      ...base,
      border: state.isFocused?'1px solid  var(--placeholder-color)':'1px solid  #d3d3d3',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'none',
      },
  
    }),
    // Add more styles as needed
  };
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
                  styles={selectStyles}
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
                styles={selectStyles}     
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
