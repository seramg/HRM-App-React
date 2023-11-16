import {
  FieldValues,
  UseFormSetValue,
  UseFormGetValues,
} from "react-hook-form";
import { Employee, Skill, TableProps } from "../core/interfaces/interface.ts";
import { SelectProps } from "@mui/material";
import React from "react";

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

export function resetSelects() {
  const resettedValues = {
    department: null,
    designation: null,
    employment_mode: null,
    skills: null,
    search_term: null
  }
  return resettedValues;
}

export const handleChange = (
  value: any,
  fieldName: string,
  getValues: UseFormGetValues<FieldValues>,
  setValue: UseFormSetValue<FieldValues>,
  tableProps: TableProps,
  addTableProps: (tableProps: TableProps) => void
) => {
  const currentFilters: FieldValues = getValues();
  let currentTableProps: TableProps = {
    ...resetSelects(),
    sort: tableProps.sort,
  };
  Object.keys(currentFilters).forEach((key: string) => {
    if (
      key === "department" ||
      key === "designation" ||
      key === "skills" ||
      key === "employment_mode" ||
      key === "search_term"
    ) {
      currentTableProps[key] = currentFilters[key];
    }
  });
  const updatedFilters: TableProps = {
    ...currentTableProps,
    [fieldName]: value,
  };
  Object.keys(updatedFilters).forEach((key: string) => {
    const tablePropsKey = key as keyof TableProps;
    setValue(key, updatedFilters[tablePropsKey]);
  });

  addTableProps(updatedFilters);
};

export const filterData = (employees: Employee[], tableProps: TableProps) => {
  let employeeTableData = employees;

  if (
    tableProps &&
    (tableProps.designation ||
      tableProps.department ||
      tableProps.skills ||
      tableProps.employment_mode)
  ) {
    employeeTableData = employees.filter((employee) => {
      const designationMatch = tableProps.designation
        ? tableProps.designation.value === employee.designation
        : true;
      const skillMatch = tableProps.skills
        ? tableProps.skills.every((skillFilter: SelectProps) => {
          return employee.skills.some(
            (skill) => skill.id === skillFilter.value
          );
        })
        : true;
      const departmentMatch = tableProps.department
        ? tableProps.department.value === employee.department
        : true;
      const empModeMatch = tableProps.employment_mode
        ? tableProps.employment_mode.value === employee.employment_mode
        : true;

      return designationMatch && skillMatch && departmentMatch && empModeMatch;
    });
  }
  return employeeTableData;
};

export const searchData = (
  employees: Employee[],
  tableProps: TableProps
): Employee[] => {
  if (
    !tableProps ||
    !tableProps["search_term"] ||
    tableProps["search_term"] === ""
  ) {
    return employees;
  }
  const searchText = tableProps["search_term"].toLowerCase();

  return employees.filter((employee) =>
    employee["emp_name"].toLowerCase().includes(searchText)
  );
};

export const findSortCriteria = (children: React.ReactNode) => {
  let sortCriteria = "id";
  if (children === "Employment Id") {
    sortCriteria = "id";
  }
  if (children === "Name") {
    sortCriteria = "emp_name";
  }
  if (children === "Designation") {
    sortCriteria = "designation";
  }
  if (children === "Department") {
    sortCriteria = "department";
  }
  if (children === "Employment Modes") {
    sortCriteria = "employment_mode";
  }
  return sortCriteria;
};

export const sortFn = (x: string, y: string, flag: number) => {
  if (x > y) {
    return flag;
  }
  if (y > x) {
    return -1 * flag;
  }
  return 0;
};

export const sortData = (
  employees: Employee[],
  sort:
    | {
      sortTerm: string | null;
      sortVal: boolean | undefined;
    }
    | null
) => {
  let sortedEmployees = employees;
  if (sort && sort.sortVal != null) {
    let flag = sort.sortVal ? +1 : -1;
    sortedEmployees = employees.sort((a: Employee, b: Employee) => {
      let x = a[sort.sortTerm as keyof Employee];
      let y = b[sort.sortTerm as keyof Employee];
      if (typeof x === "string" && typeof y === "string") {
        return sortFn(x.toLowerCase(), y.toLowerCase(), flag);
      } else {
        return 0;
      }
    });
    employees = sortedEmployees
  }
  return employees;
};

export const getNewEmpId = (employees: Employee[]) => {
  let largestId = null;
  //Comparing the ids of the employee
  for (const employee of employees) {
    if (employee != null) {
      const idNumber = parseInt(employee.id.substring(3));
      if (largestId === null || idNumber > parseInt(largestId.substring(3))) {
        largestId = employee.id;
      }
    }
  }
  //Creating the new id
  if (largestId) {
    const newEmpId = parseInt(largestId.substring(3)) + 1;
    const newEmpIdStr =
      newEmpId.toString().length <= 2
        ? "0".concat(newEmpId.toString())
        : newEmpId.toString();
    return largestId.substring(0, 3).concat(newEmpIdStr);
  } else {
    return "EMP001";
  }
};

export const getNewEmployeeDetails = (formData: FieldValues, id: string) => {
  const skillsInNewFormat = formData.skills.map((skill: SelectProps) => ({
    id: skill.value,
    name: skill.label,
  }));
  const transformedInput = {
    id: id,
    emp_name: formData.emp_name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    skills: skillsInNewFormat,
    gender: formData.gender,
    date_of_birth: formData.date_of_birth,
    date_of_joining: formData.date_of_joining,
    designation: formData.designation.value,
    department: formData.department.value,
    employment_mode: formData.employment_mode.value,
  };

  return transformedInput;
};

export const getDate = (dateVal: string) => {
  const [year, month, day] = dateVal.split("-");
  const newDate = new Date(`${year}-${month}-${day}`);
  return newDate.toISOString().split('T')[0];
}

export const getWorkExp = (dateOfJoining: string) => {
  const [year, month, day] = dateOfJoining.split('-').map(Number);
  const dateInNewFormat = new Date(year, month - 1, day);
  const DOJ = new Date(dateInNewFormat);
  const now = new Date();
  const workExp: number = Math.floor((now.getTime() - DOJ.getTime()) / (1000 * 60 * 60 * 24 * 30));
  return (workExp.toString() + "  months");
}
export const getDateView = (dateVal: string) => {
  const [year, month, day] = dateVal.split("-").map(Number);
  const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
  const dateFormatted = day + " " + monthName + " " + year;
  return dateFormatted;
}