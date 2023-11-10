import {
  UseFormReset,
  FieldValues,
  UseFormSetValue,
  UseFormGetValues,
} from "react-hook-form";
import { Employee, Skill } from "../core/interfaces/interface.ts";
import { SelectProps } from "@mui/material";
import { useContext } from "react";
import DataContext from "../core/store/DataContext.tsx";

export function transformArrayToOptionsList(array: string[]) {
  return array.map((value: string) => ({
    value: value,
    label: value,
  }));
}

export function transformArrayToSkillOptionsList(skills: Skill[]) {
  return skills.map((skill) => ({
    value: skill.id,
    label: skill.name,
  }));
}

export function resetSelects(reset: UseFormReset<FieldValues>) {
  const resetValues = {
    departments: undefined,
    designations: undefined,
    skills: undefined,
    employment_modes: undefined,
  };
  reset(resetValues);
}

export const handleChange = (
  value: any,
  fieldName: string,
  getValues: UseFormGetValues<FieldValues>,
  setValue: UseFormSetValue<FieldValues>,
  addTableProps: (tableProps: { [x: string]: any }) => void
) => {
  const currentFilters: FieldValues = getValues();
  const updatedFilters = {
    ...currentFilters,
    [fieldName]: value,
  };
  Object.keys(updatedFilters).forEach((key: string) => {
    setValue(key, updatedFilters[key]);
  });
  addTableProps(updatedFilters);
};

export const filterData = (
  employees: Employee[],
  tableProps: { [x: string]: any } | undefined
) => {
  let employeeTableData = employees;

  if (
    tableProps &&
    (tableProps.designations ||
      tableProps.departments ||
      tableProps.skills ||
      tableProps.employment_modes)
  ) {
    employeeTableData = employees.filter((employee) => {
      const designationMatch = tableProps.designations
        ? tableProps.designations.value === employee.designation
        : true;
      const skillMatch = tableProps.skills
        ? tableProps.skills.every((skillFilter: SelectProps) => {
            return employee.skills.some(
              (skill) => skill.id === skillFilter.value
            );
          })
        : true;
      const departmentMatch = tableProps.departments
        ? tableProps.departments.value === employee.department
        : true;
      const empModeMatch = tableProps.employment_modes
        ? tableProps.employment_modes.value === employee.employment_mode
        : true;

      return designationMatch && skillMatch && departmentMatch && empModeMatch;
    });
  }
  return employeeTableData;
};

export const searchData = (
  employees: Employee[],
  tableProps: { [x: string]: any } | undefined
): Employee[] => {
  if (!tableProps || !tableProps["search-text"] || tableProps["search-text"] === "") {
    return employees;
  }

  const searchText = tableProps["search-text"].toLowerCase();
  
  return employees.filter((employee) =>
    employee["emp_name"].toLowerCase().includes(searchText)
  );
};
