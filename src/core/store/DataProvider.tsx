import { useEffect, useState } from "react";
import {
  filterData,
  searchData,
  sortData,
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import {
  Data,
  Employee,
  SelectProps,
  TableProps,
} from "../interfaces/interface.ts";
import DataContext from "./DataContext.tsx";
import { fetchData } from "../../components/fetchData.ts";

const DataProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data>();
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
    if (data) {
      const sortedEmployees = sortData(data.employees, tableProps.sort);
      const filteredEmployees = filterData(sortedEmployees, tableProps);
      const searchedEmployees = searchData(filteredEmployees, tableProps);
       setEmployees(searchedEmployees);
    }
  };

  useEffect(() => {
    console.log(tableProps);
    getDataForTable();
  }, [tableProps]);

  useEffect(() => {
    setLoading(true);
    fetchData().then((response: Data | null) => {
      setLoading(false);
      if (response) {
        setData(response);
        setEmployees(response.employees);
        setDesignations(transformArrayToOptionsList(response.designations));
        setDepartments(transformArrayToOptionsList(response.departments));
        setEmpModes(transformArrayToOptionsList(response.employment_modes));
        setSkills(transformArrayToSkillOptionsList(response.skills));
      }
    });
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
        addLoader,
        addEmployees
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
