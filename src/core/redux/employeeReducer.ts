import {
  Employee,
  EmployeeReducer,
  SelectOptionProps,
  SortDirection,
  TableProps,
} from "../interfaces/interface";
import { createReducer } from "@reduxjs/toolkit";
import {
  setDataEmployees,
  setDepartments,
  setDesignations,
  setEmployees,
  setEmploymentModes,
  setLoading,
  setSkills,
  setTableProps,
} from "./tasks";

const initialState: EmployeeReducer = {
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
export default createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(setDataEmployees, (state, action) => {
      state.dataEmployees = action.payload;
    })
    .addCase(setEmployees, (state, action) => {
      state.employees = action.payload;
    })
    .addCase(setDepartments, (state, action) => {
      state.departments = action.payload;
    })
    .addCase(setDesignations, (state, action) => {
      state.designations = action.payload;
    })
    .addCase(setEmploymentModes, (state, action) => {
      state.empModes = action.payload;
    })
    .addCase(setSkills, (state, action) => {
      state.skills = action.payload;
    })
    .addCase(setTableProps, (state, action) => {
      state.tableProps = action.payload;
    });
});
