import { useState, useEffect } from "react";
import { Employee, Skill } from "../../core/interfaces/interface";
import { getData } from "../getData";
import MenuItem from '@mui/material/MenuItem';

function Select() {
  const [designations, setDesignations] = useState<string[]>([]);
  const [departments, setDepartments] = useState<string[]>([]);
  const [empModes, setEmpModes] = useState<string[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setDesignations(data.designations);
        setDepartments(data.departments);
        setEmpModes(data.employment_modes);
        setSkills(data.skills);
      }
    };

    fetchData();
  }, []);

  return <select >
      {designations.map((designation) => {
        return <option value={designation}>{designation}</option>;
      })}
    </select>
  ;
}
export default Select;
