import { useEffect, useState } from "react";
import DataContext from "./DataContext.tsx";
import { Employee, SelectProps } from "../interfaces/interface.ts";
import { getData } from "../../components/getData.tsx";
import {
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";

const DataProvider = ({ children }: { children: any }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [designations, setDesignations] = useState<SelectProps[]>([]);
  const [departments, setDepartments] = useState<SelectProps[]>([]);
  const [empModes, setEmpModes] = useState<SelectProps[]>([]);
  const [skills, setSkills] = useState<SelectProps[]>([]);

  const fetchData = async () => {
    const data = await getData();
    if (data) {
      setEmployees(data.employees);
      setDesignations(transformArrayToOptionsList(data.designations));
      setDepartments(transformArrayToOptionsList(data.departments));
      setEmpModes(transformArrayToOptionsList(data.employment_modes));
      setSkills(transformArrayToSkillOptionsList(data.skills));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <DataContext.Provider
      value={{
        employees,
        departments,
        designations,
        employment_modes: empModes,
        skills,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
