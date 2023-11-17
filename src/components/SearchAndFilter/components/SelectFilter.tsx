import { useContext, useState } from "react";
import Select from "react-select";
import {
  SelectInputProps,
  TableProps,
} from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import InputWrapper from "../../Input/input.ts";
import selectStyles from "../../Select/selectCustomStyles.ts";
import { SelectProps } from "@mui/material";

function SelectFilter({
  label,
  options,
  placeholder,
  isMulti,
  fieldName,
}: SelectInputProps) {
  const { addTableProps, tableProps } = useContext(DataContext);

  return (
    <InputWrapper>
      {label}
      <Select
        value={tableProps[fieldName] as SelectProps | SelectProps[]}
        isClearable={true}
        className="label"
        isSearchable={true}
        options={options}
        placeholder={<div className="placeholder">{placeholder}</div>}
        isMulti={isMulti}
        styles={selectStyles}
        onChange={(selectedOption) => {
          const currentTableProps: TableProps = {
            ...tableProps,
            [fieldName]: selectedOption,
          };
          addTableProps(currentTableProps);
        }}
      />
    </InputWrapper>
  );
}

export default SelectFilter;
