import { createContext } from "react";
import { ContextProps } from "../interfaces/interface";

const DataContext = createContext<ContextProps>({
  employees: [],
  departments: [],
  designations: [],
  employment_modes: [],
  skills: [],
  tableProps: {
    department: null,
    designation: null,
    employment_mode: null,
    skills: null,
    sort: {
      sortVal: undefined,
      sortTerm: null,
    },
    search_term: null,
  },
  addTableProps: () => {},
  loading: false,
  addLoader: () => {},
});

export default DataContext;
