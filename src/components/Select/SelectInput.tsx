import Select from "react-select";
import InputWrapper from "../Input/input.ts";
import { SelectInputProps } from "../../core/interfaces/interface.ts";

function SelectInput({
  label,
  options,
  placeholder,
  isMulti,
}: SelectInputProps) {
  return (
    <InputWrapper>
      {label}
      <Select
        isSearchable={true}
        options={options}
        placeholder={placeholder}
        {...(isMulti ? { isMulti: true } : { isMulti: false })}
      />
    </InputWrapper>
  );
}

export default SelectInput;
