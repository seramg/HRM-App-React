import { useContext } from "react";
import { Control, FieldValues } from "react-hook-form";
import {
  Employee,
  SelectProps,
  Skill,
  TableProps,
} from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import SelectInput from "./SelectInput.tsx";
import { generatePlaceholder, transformArrayToSkillOptionsList } from "../../utils/helper.ts";
import React from "react";

function SelectList({
  control,
  value,
}: {
  control: Control<FieldValues, any>;
  value?: Employee;
}) {
  const { departments, designations, employment_modes, skills } =
    useContext(DataContext);

  function renderSelectInput(
    label: string,
    fieldName: keyof TableProps,
    options: SelectProps[],
    isMulti: boolean,
    value: string | Skill[] | undefined
  ) {

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

  const fields: {
    label: string,
    options: SelectProps[],
    isMulti: boolean,
    value: string | Skill[] | undefined,
    fieldName: keyof TableProps
  }[] = [
      {
        label: "Departments",
        fieldName: "department",
        options: departments,
        isMulti: false,
        value: value?.department,
      },
      {
        label: "Designations",
        fieldName: "designation",
        options: designations,
        isMulti: false,
        value: value?.designation,
      },
      {
        label: "Employment Modes",
        fieldName: "employment_mode",
        options: employment_modes,
        isMulti: false,
        value: value?.employment_mode,
      },
      {
        label: "Skills",
        fieldName: "skills",
        options: skills,
        isMulti: true,
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
