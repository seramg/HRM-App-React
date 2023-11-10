import { useEffect, useState } from "react";
import DataContext from "./DataContext.tsx";
import { Employee, SelectProps } from "../interfaces/interface.ts";
import { getData } from "../../components/getData.tsx";
import {
  filterData,
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";

const DataProvider = ({ children }: { children: any }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [designations, setDesignations] = useState<SelectProps[]>([]);
  const [departments, setDepartments] = useState<SelectProps[]>([]);
  const [empModes, setEmpModes] = useState<SelectProps[]>([]);
  const [skills, setSkills] = useState<SelectProps[]>([]);
  const [filters, setFilters] = useState<{ [x: string]: any }>();

  const addFilters = (filters: { [x: string]: any }) => {
    setFilters(filters);
  };

  const fetchData = async () => {
    const data = await getData();
    if (data) {
      const employees = data.employees;
      const filteredEmployees = filterData(employees, filters);
      console.log(filteredEmployees);
      setEmployees(filteredEmployees);
      setDesignations(transformArrayToOptionsList(data.designations));
      setDepartments(transformArrayToOptionsList(data.departments));
      setEmpModes(transformArrayToOptionsList(data.employment_modes));
      setSkills(transformArrayToSkillOptionsList(data.skills));
    }
  };
  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <DataContext.Provider
      value={{
        employees,
        departments,
        designations,
        employment_modes: empModes,
        skills,
        addFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
