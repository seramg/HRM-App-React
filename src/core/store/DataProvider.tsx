import { useEffect, useState } from "react";
import {
  filterData,
  searchData,
  sortData,
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import {
  Employee,
  SelectProps,
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
      sortVal: true,
      sortTerm: "id",
    },
    search_term: null,
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

  const getDataForTable = () => {
    if (employees) {
      console.log("get data for table")
      const sortedEmployees = sortData(dataEmployees, tableProps);
      const filteredEmployees = filterData(sortedEmployees, tableProps);
      const searchedEmployees = searchData(filteredEmployees, tableProps);
      console.log(searchedEmployees)
      setEmployees([...searchedEmployees]);
    }
  };


  const fetchDataAndSetContext = async () => {
    try {
      addLoader(true);
      const getResponse = await getData("/.json");
      const dataResponse = getResponse.data
      console.log("Data fetched successfully:", dataResponse);

      if (dataResponse) {
        setEmployees(dataResponse.employees);
        setDataEmployees(dataResponse.employees);
        setDesignations(transformArrayToOptionsList(dataResponse.designations));
        setDepartments(transformArrayToOptionsList(dataResponse.departments));
        setEmpModes(transformArrayToOptionsList(dataResponse.employment_modes));
        setSkills(transformArrayToSkillOptionsList(dataResponse.skills));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      addLoader(false);
    }
  };

  useEffect(() => {
    console.log(tableProps);
    getDataForTable();
  }, [tableProps]);

  useEffect(() => {
    fetchDataAndSetContext();
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
        fetchDataAndSetContext,
        addEmployees,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
