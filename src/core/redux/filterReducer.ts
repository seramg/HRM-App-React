import { createReducer } from "@reduxjs/toolkit";
import {
  setDepartments,
  setDesignations,
  setEmploymentModes,
  setSkills,
} from "./tasks";
import { FilterReducer } from "../interfaces/interface";

const initialState: FilterReducer = {
  departments: [],
  designations: [],
  empModes: [],
  skills: [],
};
export default createReducer(initialState, (builder) => {
  builder
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
    });
});
