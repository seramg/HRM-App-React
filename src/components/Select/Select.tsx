import { useState, useEffect } from "react";
import { IsMultiStateProps, SelectProps } from "../../core/interfaces/interface.ts";
import { getData } from "../getData.tsx";
import {
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import SelectInput from "./SelectInput.tsx";

function SelectDropDown({ isMultiState }: { isMultiState: IsMultiStateProps }){
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
        <SelectInput
          label="Departments"
          options={departments}
          placeholder="Select department"
          isMulti={isMultiState.isDepartmentsMulti}
        />

        <SelectInput
          label="Designations"
          options={designations}
          placeholder="Select designation"
          isMulti={isMultiState.isDesignationsMulti}
        />

        <SelectInput
          label="Employment Modes"
          options={empModes}
          placeholder="Select employment mode"
          isMulti={isMultiState.isEmpModesMulti}
        />

        <SelectInput
          label="Skills"
          options={skills}
          placeholder="Select skill"
          isMulti={isMultiState.isSkillsMulti}
        />
    </>
  );
}
export default SelectDropDown;
