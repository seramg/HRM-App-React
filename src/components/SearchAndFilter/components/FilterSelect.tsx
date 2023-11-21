import { useContext, useState } from "react";
import Select from "react-select";
import {
  SelectDropdownProps,
  SelectOptionProps,
  TableProps,
} from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import InputWrapper from "../../Input/input.ts";
import selectStyles from "../../Select/selectCustomStyles.ts";

function FilterSelect({
  label,
  options,
  placeholder,
  isMulti,
  fieldName,
}: SelectDropdownProps) {
  const { addTableProps, tableProps } = useContext(DataContext);

  return (
    <InputWrapper>
      {label}
      <Select
        value={tableProps[fieldName] as SelectOptionProps | SelectOptionProps[]}
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
            [fieldName]: selectedOption, // once the select dropdown option is changed, the totalprops changes
          };
          addTableProps(currentTableProps);
        }}
      />
    </InputWrapper>
  );
}

export default FilterSelect;
