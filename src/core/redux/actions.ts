// import { toast } from "react-toastify";
// import { getData } from "../api/functions.ts";
// import {
//   Data,
//   Employee,
//   SelectOptionProps,
//   TableProps,
// } from "../interfaces/interface";
// import { transformArrayToOptionsList, transformArrayToSkillOptionsList } from "../../utils/helper.ts";
// import { createAction } from "@reduxjs/toolkit";


// export const setLoading = createAction<boolean>("SET_LOADING");// this parameter will get assigned to the type property
// export const setDataEmployees = createAction<Employee[]>("SET_DATA_EMPLOYEES");
// export const setEmployees = createAction<Employee[]>("SET_EMPLOYEES");
// export const setDesignations = createAction<SelectOptionProps[]>("SET_DESIGNATIONS");
// export const setDepartments = createAction<SelectOptionProps[]>("SET_DEPARTMENTS");
// export const setEmploymentModes = createAction<SelectOptionProps[]>("SET_EMP_MODES");
// export const setSkills = createAction<SelectOptionProps[]>("SET_SKILLS");
// export const setTableProps = createAction<TableProps>("SET_TABLE_PROPS");


// // export const fetchEmployeeData = () => {
// //   return async function (dispatch: (arg0: {
// //     type: string;
// //     payload: Employee[] | SelectOptionProps[] | TableProps | boolean;
// //   }) => void) {
// //     try {
// //       const response = await getData("/.json");
// //       const dataResponse: Data = response.data;
// //       if (dataResponse) {
// //         dispatch(setDataEmployees(Object.values(dataResponse.employees)));
// //         dispatch(setEmployees(Object.values(dataResponse.employees)));
// //         return dataResponse; // Resolve the promise with the data
// //       } else {
// //         toast.error("No data is recieved", { toastId: "no-data" });
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     } finally {
// //       dispatch(setLoading(false));
// //     }
// //   }
// // }

// // export const fetchFirebaseData = () => {
// //   return async function (dispatch: (arg0: {
// //     type: string;
// //     payload: Employee[] | SelectOptionProps[] | TableProps | boolean;
// //   }) => void) {

// //     try {
// //       const dataResponse = await fetchEmployeeData()(dispatch);
// //       if (dataResponse) {
// //         dispatch(setDesignations(transformArrayToOptionsList(dataResponse.designations)));
// //         dispatch(setDepartments(transformArrayToOptionsList(dataResponse.departments)));
// //         dispatch(setEmploymentModes(transformArrayToOptionsList(dataResponse.employment_modes)));
// //         dispatch(setSkills(transformArrayToSkillOptionsList(dataResponse.skills)));
// //       }
// //     } catch (error) {
// //       console.error("Error fetching dropdown data:", error);
// //     }
// //   }
// // };

