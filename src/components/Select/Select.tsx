import { useState, useEffect } from "react";
import { SelectProps } from "../../core/interfaces/interface.ts";
import { getData } from "../getData.tsx";
import {
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import { InputRow } from "../../pages/EmployeeUpdate/form.ts";
import SelectInput from "./SelectInput.tsx";

function SelectDropDown() {
  const [designations, setDesignations] = useState<SelectProps[]>([]);
  const [departments, setDepartments] = useState<SelectProps[]>([]);
  const [empModes, setEmpModes] = useState<SelectProps[]>([]);
  const [skills, setSkills] = useState<SelectProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setDesignations(transformArrayToOptionsList(data.designations));
        setDepartments(transformArrayToOptionsList(data.departments));
        setEmpModes(transformArrayToOptionsList(data.employment_modes));
        setSkills(transformArrayToSkillOptionsList(data.skills));
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <InputRow>
        <SelectInput
          label="Departments"
          options={departments}
          placeholder="Select department"
        />

        <SelectInput
          label="Designations"
          options={designations}
          placeholder="Select designation"
        />

        <SelectInput
          label="Employment Modes"
          options={empModes}
          placeholder="Select employment mode"
        />

        <SelectInput
          label="Skills"
          options={skills}
          placeholder="Select skills"
          isMulti
        />
      </InputRow>
    </>
  );
}
export default SelectDropDown;
