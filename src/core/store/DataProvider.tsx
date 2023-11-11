import { useEffect, useState } from "react";
import { getData } from "../../components/getData.tsx";
import {
  filterData,
  searchData,
  sortData,
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import { Employee, SelectProps, TableProps } from "../interfaces/interface.ts";
import DataContext from "./DataContext.tsx";

const DataProvider = ({ children }: { children: any }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [designations, setDesignations] = useState<SelectProps[]>([]);
  const [departments, setDepartments] = useState<SelectProps[]>([]);
  const [empModes, setEmpModes] = useState<SelectProps[]>([]);
  const [skills, setSkills] = useState<SelectProps[]>([]);
  const [tableProps, setTableProps] = useState<TableProps>({
    departments: undefined,
    designations: undefined,
    employment_modes: undefined,
    skills: undefined,
    sort: {
      sortVal: undefined,
      sortTerm: "id",
    },
    search_term: undefined,
  });

  const addTableProps = (tableProps: TableProps) => {
    setTableProps(tableProps);
  };

  const fetchData = async () => {
    const data = await getData();
    if (data) {
      const employees = data.employees;
      const sortedEmployees = sortData(employees, tableProps.sort);
      const filteredEmployees = filterData(sortedEmployees, tableProps);
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
