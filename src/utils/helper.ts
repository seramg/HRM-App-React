import { UseFormReset, FieldValues } from "react-hook-form";
import { Employee, Skill } from "../core/interfaces/interface.ts";
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
    departments: "",
    designations: "",
    skills: "",
    employment_modes: "",
  };
  reset(resetValues);
}

export const filterData = (
  employees: Employee[],
  filters: { [x: string]: any } | undefined
) => {
  let employeeTableData = employees;

  if (
    filters &&
    (filters.designations || filters.departments || filters.skills)
  ) {
    employeeTableData = employees.filter((employee) => {
      const designationMatch = filters.designations
        ? filters.designations.value === employee.designation
        : true;
      const skillMatch = filters.skills
        ? filters.skills.every((skillFilter: Skill) =>
            employee.skills.some((skill) => skill.id === skillFilter.id)
          )
        : true;
      const departmentMatch = filters.departments
        ? filters.departments.value === employee.department
        : true;

      return designationMatch && skillMatch && departmentMatch;
    });
  }
  return employeeTableData;
};
