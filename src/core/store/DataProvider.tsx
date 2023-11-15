import { useEffect, useState } from "react";
import {
  filterData,
  searchData,
  sortData,
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import { Employee, SelectProps, TableProps } from "../interfaces/interface.ts";
import DataContext from "./DataContext.tsx";
import { fetchData } from "../../components/fetchData.ts";

const DataProvider = ({ children }: { children: any }) => {
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

  const addTableProps = (tableProps: TableProps) => {
    setTableProps(tableProps);
  };
  const data =  fetchData();
  const getDataForTable = async() => {
    const dataCopy = await data;
    if (dataCopy) {
      const employees = dataCopy.employees;
      const sortedEmployees = sortData(employees, tableProps.sort);
      const filteredEmployees = filterData(sortedEmployees, tableProps);
      const searchedEmployees = searchData(filteredEmployees, tableProps);

      setEmployees(searchedEmployees);
      setDesignations(transformArrayToOptionsList(dataCopy.designations));
      setDepartments(transformArrayToOptionsList(dataCopy.departments));
      setEmpModes(transformArrayToOptionsList(dataCopy.employment_modes));
      setSkills(transformArrayToSkillOptionsList(dataCopy.skills));
    }
  };
  useEffect(() => {
    getDataForTable();
  }, [tableProps]);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
