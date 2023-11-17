import { Control } from "react-hook-form";

export interface Data {
  departments: string[],
  designations: string[],
  skills: Skill[],
  employment_modes: string[],
  employees: Employee[]
}
export interface SortProps {
  sortVal: boolean;
  sortTerm: string | null;
}
export interface TableProps {
  department: SelectProps | null;
  designation: SelectProps | null;
  skills: SelectProps[] | null;
  employment_mode: SelectProps | null;
  sort: SortProps;
  search_term: string | null;
}

export interface ContextProps {
  employees: Employee[];
  departments: SelectProps[];
  designations: SelectProps[];
  employment_modes: SelectProps[];
  skills: SelectProps[];
  tableProps: TableProps;
  addTableProps: (tableProps: TableProps) => void;
  loading: boolean;
  fetchDataAndSetContext: () => void;
  addEmployees: (employees: Employee[]) => void;
}

export interface Skill {
  id: string;
  name: string;
}
export interface Employee {
  address: string;
  date_of_birth: string;
  date_of_joining: string;
  department: string;
  designation: string;
  emp_name: string;
  employment_mode: string;
  email: string;
  gender: string;
  id: string;
  phone: string;
  skills: Skill[];
}
export interface FormEmployee {
  address: string | null;
  date_of_birth: string | null;
  date_of_joining: string | null;
  department: SelectProps | null;
  designation: SelectProps | null;
  emp_name: string | null;
  employment_mode: SelectProps | null;
  email: string | null;
  gender: string | null;
  id: string;
  phone: string | null;
  skills: SelectProps[] | null;
}

export interface SelectProps {
  value: string;
  label: string;
}

export interface SelectInputProps {
  label: string;
  options: SelectProps[];
  placeholder: string;
  isMulti?: boolean;
  control?: Control<Employee, any>;
  fieldName:  keyof TableProps;
  value?: SelectProps | SelectProps[] | null
}
export interface InputProps {
  validation: {
    required: {
      value: boolean;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    max?: {
      value: string;
      message: string;
    };
  };
  label: string;
  type: string;
  options?: string[];
  name: string;
  value?: string
}

export interface IsMultiStateProps {
  isDepartmentsMulti: boolean;
  isDesignationsMulti: boolean;
  isEmpModesMulti: boolean;
  isSkillsMulti: boolean;
}
