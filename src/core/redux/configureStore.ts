import { configureStore, Tuple } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer.ts";
import tableReducer from "./tableReducer.ts";
import filterReducer from "./filterReducer.ts";
import logger from "redux-logger";
import error from "./../middleware/error";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    table: tableReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,error),
});
export default store;
