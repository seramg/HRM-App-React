import { useContext } from "react";
import { Control, FieldValues } from "react-hook-form";
import {
  Employee,
  IsMultiStateProps,
  SelectProps,
  Skill,
} from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import SelectInput from "./SelectInput.tsx";
import { transformArrayToSkillOptionsList } from "../../utils/helper.ts";
import React from "react";
import SelectFilter from "../SearchAndFilter/components/SelectFilter.tsx";

function SelectList({
  isMultiState,
  control,
  isFilter = false,
  value,
}: {
  isMultiState: IsMultiStateProps;
  control: Control<FieldValues, any>;
  isFilter?: boolean;
  value?: Employee;
}) {
  const { departments, designations, employment_modes, skills } =
    useContext(DataContext);

  function generatePlaceholder(fieldName: string): string {
    return `Select ${fieldName.replace(/_/g, " ").toLowerCase()}`;
  }

  function renderSelectInput(
    label: string,
    fieldName: string,
    options: SelectProps[],
    isMulti: boolean,
    value: string | Skill[] | undefined
  ) {
    if (isFilter) {
      return (
        <SelectFilter
          label={label}
          options={options}
          placeholder={generatePlaceholder(fieldName)}
          isMulti={isMulti}
          fieldName={fieldName}
          control={control}
        />
      );
    }
    const placeholder = generatePlaceholder(fieldName);

    return (
      <>
        {value && Array.isArray(value) && fieldName === "skills" && (
          <SelectInput
            label="Skills"
            options={skills}
            placeholder={placeholder}
            control={control}
            fieldName="skills"
            value={value ? transformArrayToSkillOptionsList(value) : []}
            isMulti
          />
        )}
        {typeof value === "string" && (
          <SelectInput
            label={label}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
            control={control}
            fieldName={fieldName}
            value={value ? { value, label: value } : null}
          />
        )}
        {!value && (
          <SelectInput
            label={label}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
            control={control}
            fieldName={fieldName}
          />
        )}
      </>
    );
  }

  const fields = [
    {
      label: "Departments",
      fieldName: "department",
      options: departments,
      isMulti: isMultiState.isDepartmentsMulti,
      value: value?.department,
    },
    {
      label: "Designations",
      fieldName: "designation",
      options: designations,
      isMulti: isMultiState.isDesignationsMulti,
      value: value?.designation,
    },
    {
      label: "Employment Modes",
      fieldName: "employment_mode",
      options: employment_modes,
      isMulti: isMultiState.isEmpModesMulti,
      value: value?.employment_mode,
    },
    {
      label: "Skills",
      fieldName: "skills",
      options: skills,
      isMulti: isMultiState.isSkillsMulti,
      value: value?.skills,
    },
  ];

  return (
    <div className="select-list common-flex">
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          {renderSelectInput(
            field.label,
            field.fieldName,
            field.options,
            field.isMulti,
            field.value
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default SelectList;
