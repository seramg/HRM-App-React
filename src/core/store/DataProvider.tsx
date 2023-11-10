import { useEffect, useState } from "react";
import DataContext from "./DataContext.tsx";
import { Employee, SelectProps } from "../interfaces/interface.ts";
import { getData } from "../../components/getData.tsx";
import {
  filterData,
  searchData,
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";

const DataProvider = ({ children }: { children: any }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [designations, setDesignations] = useState<SelectProps[]>([]);
  const [departments, setDepartments] = useState<SelectProps[]>([]);
  const [empModes, setEmpModes] = useState<SelectProps[]>([]);
  const [skills, setSkills] = useState<SelectProps[]>([]);
  const [tableProps, setTableProps] = useState<{ [x: string]: any }>();

  const addTableProps = (tableProps: { [x: string]: any; } | undefined) => {
    setTableProps(tableProps);
  };

  const fetchData = async () => {
    const data = await getData();
    if (data) { 
      const employees = data.employees;
      console.log(tableProps)
      const filteredEmployees = filterData(employees, tableProps);
      const searchedEmployees = searchData(filteredEmployees, tableProps);
      setEmployees(searchedEmployees);
      setDesignations(transformArrayToOptionsList(data.designations));
      setDepartments(transformArrayToOptionsList(data.departments));
      setEmpModes(transformArrayToOptionsList(data.employment_modes));
      setSkills(transformArrayToSkillOptionsList(data.skills));
    }
  };
  useEffect(() => {
    fetchData();
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
