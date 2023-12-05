import { Employee, SelectOptionProps, SortDirection, TableProps } from "../interfaces/interface";
import {
  SET_DATA_EMPLOYEES,
  SET_EMPLOYEES,
  SET_DEPARTMENTS,
  SET_DESIGNATIONS,
  SET_EMP_MODES,
  SET_SKILLS,
  SET_TABLE_PROPS,
  SET_LOADING,
} from "./actions";

const initialState = {
  employees: [],
  departments: [],
  designations: [],
  empModes: [],
  skills: [],
  tableProps: {
    department: null,
    designation: null,
    employment_mode: null,
    skills: null,
    sort: {
      sortVal: SortDirection.NO_SORT,
      sortTerm: "",
    },
    search_term: "",
  },
  loading: true,
};

function rootReducer  (
  state: any ,
  action: {
    type: string;
    payload: Employee[] | SelectOptionProps[] | TableProps;
  }
) {
  switch (action.type) {
    case SET_DATA_EMPLOYEES:
      return { ...state, dataEmployees: action.payload };
    case SET_EMPLOYEES:
      return { ...state, employees: action.payload };
    case SET_DEPARTMENTS:
      return { ...state, departments: action.payload };
    case SET_DESIGNATIONS:
      return { ...state, designations: action.payload };
    case SET_EMP_MODES:
      return { ...state, employee_modes: action.payload };
    case SET_SKILLS:
      return { ...state, skills: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_TABLE_PROPS:
      return { ...state, tableProps: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
