import { useContext, useState } from "react";
import Select from "react-select";
import {
  SelectInputProps,
  TableProps,
} from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import InputWrapper from "../../Input/input.ts";
import selectStyles from "../../Select/selectCustomStyles.ts";
import { Controller } from "react-hook-form";

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
  fieldName,
  control,
}: SelectInputProps) {
  const { addTableProps, tableProps } = useContext(DataContext);

  const fieldVal = tableProps[fieldName as keyof TableProps];
  const [currentSelectVal, setCurrentSelectVal] = useState(fieldVal);

  const handleChange = (value: any) => {
    let currentTableProps: TableProps = {
      ...tableProps,
      [fieldName]: value,
    } as TableProps;
    console.log(currentTableProps);
    setCurrentSelectVal(fieldVal)
    addTableProps(currentTableProps);
  };

  return (
    <InputWrapper>
      {label}
      <Controller
        name={fieldName}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            defaultValue={currentSelectVal}
            isClearable={true}
            className="label"
            isSearchable={true}
            options={options}
            placeholder={<div className="placeholder">{placeholder}</div>}
            isMulti={isMulti || false}
            styles={selectStyles}
            onChange={(selectedOption) => handleChange(selectedOption)}
          />
        )}
      />
    </InputWrapper>
  );
}

export default SelectInput;
