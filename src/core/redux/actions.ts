import {
  Employee,
  SelectOptionProps,
  TableProps,
} from "../interfaces/interface";

export const SET_DATA_EMPLOYEES = "SET_DATA_EMPLOYEES";
export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_DEPARTMENTS = "SET_DEPARTMENTS";
export const SET_DESIGNATIONS = "SET_DESIGNATIONS";
export const SET_EMP_MODES = "SET_EMP_MODES";
export const SET_SKILLS = "SET_SKILLS";
export const SET_TABLE_PROPS = "SET_TABLE_PROPS";
export const SET_LOADING = "SET_LOADING";

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});
export const setDataEmployees = (dataEmployees: Employee[]) => ({
  type: SET_DATA_EMPLOYEES,
  payload: dataEmployees,
});
export const setEmployees = (employees: Employee[]) => ({
  type: SET_EMPLOYEES,
  payload: employees,
});
export const setDesignations = (designations: SelectOptionProps[]) => ({
  type: SET_DESIGNATIONS,
  payload: designations,
});
export const setDepartments = (departments: SelectOptionProps[]) => ({
  type: SET_DEPARTMENTS,
  payload: departments,
});
export const setEmployeeModes = (employee_modes: SelectOptionProps[]) => ({
  type: SET_EMP_MODES,
  payload: employee_modes,
});
export const setSkills = (skills: SelectOptionProps[]) => ({
  type: SET_SKILLS,
  payload: skills,
});
export const setTableProps = (tableProps: TableProps) => ({
  type: SET_TABLE_PROPS,
  payload: tableProps,
});
