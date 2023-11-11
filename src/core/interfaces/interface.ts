import { Control, FieldValues } from "react-hook-form";

export interface TableProps {
  departments: SelectProps | undefined;
  designations: SelectProps | undefined;
  skills: Skill[] | undefined;
  employment_modes: SelectProps | undefined;
  sort: {
    sortVal: boolean | undefined;
    sortTerm: string | undefined ;
  };
}

export interface ContextProps {
  employees: Employee[];
  departments: SelectProps[];
  designations: SelectProps[];
  employment_modes: SelectProps[];
  skills: SelectProps[];
  tableProps: TableProps;
  addTableProps: (tableProps: TableProps) => void;
}

export interface FilterProps {
  departments: SelectProps | undefined;
  designations: SelectProps | undefined;
  employment_modes: SelectProps | undefined;
  skills: SelectProps[] | undefined;
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
  gender: string;
  id: string;
  phone: string;
  skills: Skill[];
}
export interface Data {
  departments: string[];
  designations: string[];
  employees: Employee[];
  employment_modes: string[];
  skills: Skill[];
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
  control?: Control<FieldValues, any>;
  fieldName: string;
  isFilter: boolean;
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
}

export interface IsMultiStateProps {
  isDepartmentsMulti: boolean;
  isDesignationsMulti: boolean;
  isEmpModesMulti: boolean;
  isSkillsMulti: boolean;
}
