import { useEffect, useState } from "react";
import {
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import {
  Data,
  Employee,
  SelectProps,
  SortDirection,
  TableProps,
} from "../interfaces/interface.ts";
import DataContext from "./DataContext.tsx";
import { getData } from "../api/functions.ts";

const DataProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataEmployees, setDataEmployees] = useState<Employee[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [designations, setDesignations] = useState<SelectProps[]>([]);
  const [departments, setDepartments] = useState<SelectProps[]>([]);
  const [empModes, setEmpModes] = useState<SelectProps[]>([]);
  const [skills, setSkills] = useState<SelectProps[]>([]);
  const [tableProps, setTableProps] = useState<TableProps>({
    department: null,
    designation: null,
    employment_mode: null,
    skills: null,
    sort: {
      sortVal: SortDirection.NO_SORT,
      sortTerm: "",
    },
    search_term: "",
  });

  const addEmployees = (employees: Employee[]) => {
    setEmployees(employees);
  };
  const addTableProps = (tableProps: TableProps) => {
    setTableProps(tableProps);
  };
  const addLoader = (loadingState: boolean) => {
    setLoading(loadingState);
  };
  const fetchEmployeeData = async () => {
    try {
      addLoader(true);
      const response = await getData("/.json");
      const dataResponse: Data = response.data;
      if (dataResponse) {
        setDataEmployees(dataResponse.employees);
        setEmployees(dataResponse.employees);
        return dataResponse; // Resolve the promise with the data
      } else {
        throw new Error("No data received");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      addLoader(false);
    }
  };
  const fetchFirebaseData = async () => {
    try {
      const dataResponse = await fetchEmployeeData();
      if (dataResponse) {
        setDesignations(transformArrayToOptionsList(dataResponse.designations));
        setDepartments(transformArrayToOptionsList(dataResponse.departments));
        setEmpModes(transformArrayToOptionsList(dataResponse.employment_modes));
        setSkills(transformArrayToSkillOptionsList(dataResponse.skills));
      }
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
    }
  };

  useEffect(() => {
    fetchFirebaseData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        employees,
        departments,
        designations,
        employment_modes: empModes,
        skills,
        tableProps,
        addTableProps,
        loading,
        fetchEmployeeData,
        addEmployees,
        addLoader,
        dataEmployees,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
