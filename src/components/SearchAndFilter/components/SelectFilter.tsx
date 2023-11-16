import { useContext } from "react";
import Select from "react-select";
import {
  SelectInputProps,
  TableProps,
} from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import InputWrapper from "../../Input/input.ts";
import selectStyles from "../../Select/selectCustomStyles.ts";

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
  fieldName,
}: SelectInputProps) {
  const { addTableProps, tableProps } = useContext(DataContext);

  const handleChange = (value: any) => {
    let currentTableProps: TableProps = {
      ...tableProps,
      [fieldName]: value,
    } as TableProps;
    console.log(currentTableProps);
    addTableProps(currentTableProps);
  };

  return (
    <InputWrapper>
      {label}
      <Select
        isClearable={true}
        className="label"
        isSearchable={true}
        options={options}
        placeholder={<div className="placeholder">{placeholder}</div>}
        isMulti={isMulti || false}
        styles={selectStyles}
        onChange={(selectedOption) => handleChange(selectedOption)}
      />
    </InputWrapper>
  );
}

export default SelectInput;
