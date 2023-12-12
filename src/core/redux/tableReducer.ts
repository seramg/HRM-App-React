import { createReducer } from "@reduxjs/toolkit";
import { TableProps, SortDirection, TableReducer } from "../interfaces/interface";
import { setLoading, setTableProps } from "./tasks";

const initialState: TableReducer = {
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
    .addCase(setTableProps, (state, action) => {
      state.tableProps = action.payload;
    });
});
