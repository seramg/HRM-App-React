import { useContext, useState } from "react";
import Select from "react-select";
import {
  SelectInputProps,
  TableProps,
} from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import InputWrapper from "../../Input/input.ts";
import selectStyles from "../../Select/selectCustomStyles.ts";

function SelectFilter({
  label,
  options,
  placeholder,
  isMulti,
  fieldName,
}: SelectInputProps) {
  const { addTableProps, tableProps } = useContext(DataContext);

  const fieldVal = tableProps[fieldName as keyof TableProps];
  const [currentSelectVal, setCurrentSelectVal] = useState(fieldVal);

  return (
    <InputWrapper>
      {label}
      <Select
        value={currentSelectVal}
        isClearable={true}
        className="label"
        isSearchable={true}
        options={options}
        placeholder={<div className="placeholder">{placeholder}</div>}
        isMulti={isMulti || false}
        styles={selectStyles}
        onChange={(selectedOption) => {
          let currentTableProps: TableProps = {
            ...tableProps,
            [fieldName]: selectedOption,
          } as TableProps;
          setCurrentSelectVal(fieldVal);

          addTableProps(currentTableProps);
        }}
      />
    </InputWrapper>
  );
}

export default SelectFilter;
