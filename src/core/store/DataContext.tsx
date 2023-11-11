import { createContext } from "react";
import { ContextProps } from "../interfaces/interface";

const DataContext = createContext<ContextProps>({
  employees: [],
  departments: [],
  designations: [],
  employment_modes: [],
  skills: [],
  tableProps: {
    departments: undefined,
    designations: undefined,
    employment_modes: undefined,
    skills: [],
    sort: {
      sortVal: false,
      sortTerm: undefined,
    },
    search_term: undefined,
  },
  addTableProps: () => {},
});

export default DataContext;
