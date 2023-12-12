import { createSlice } from "@reduxjs/toolkit";
import {
  Employee,
  SelectOptionProps,
  TableProps,
  SortDirection,
} from "../interfaces/interface";

interface State {
  dataEmployees: Employee[]; // Assuming Employee is a defined type
  employees: Employee[]; // You should replace 'any' with the actual type if available
  departments: SelectOptionProps[]; // Replace 'any' with the actual type if available
  designations: SelectOptionProps[]; // Replace 'any' with the actual type if available
  empModes: SelectOptionProps[]; // Replace 'any' with the actual type if available
  skills: SelectOptionProps[]; // Replace 'any' with the actual type if available
  tableProps: TableProps;
  loading: boolean;
}

const initialState: State = {
  dataEmployees: [],
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
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDataEmployees: (state, action) => {
      state.dataEmployees = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
    setDesignations: (state, action) => {
      state.designations = action.payload;
    },
    setEmploymentModes: (state, action) => {
      state.empModes = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setTableProps: (state, action) => {
      state.tableProps = action.payload;
    },
  },
});

export const {
  setDataEmployees,
  setDepartments,
  setDesignations,
  setEmployees,
  setEmploymentModes,
  setLoading,
  setSkills,
  setTableProps,
} = dataSlice.actions;
export default dataSlice.reducer;
