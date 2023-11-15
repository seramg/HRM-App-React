import { SelectProps } from "@mui/material";
import {
  CSSObjectWithLabel,
  ControlProps,
  DropdownIndicatorProps,
  StylesConfig,
} from "react-select";

const selectStyles: StylesConfig<SelectProps> = {
  control: (base: CSSObjectWithLabel, state: ControlProps<SelectProps>) => ({
    ...base,
    border: state.isFocused
      ? "1px solid  var(--light-gray-color)"
      : "1px solid  var(--dark-gray-color)",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  placeholder: (base: CSSObjectWithLabel) => ({
    ...base,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  dropdownIndicator: (
    base: CSSObjectWithLabel,
    state: DropdownIndicatorProps<SelectProps>
  ) => ({
    ...base,
    color: state.isFocused
      ? "var(--light-gray-color)"
      : "var(--dark-gray-color)", // Set the color of the arrow
  }),
};
export default selectStyles;
