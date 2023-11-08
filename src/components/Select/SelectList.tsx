import { useState, useEffect } from "react";
import {
  IsMultiStateProps,
  SelectProps,
} from "../../core/interfaces/interface.ts";
import { getData } from "../getData.tsx";
import {
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import SelectInput from "./SelectInput.tsx";
import { Control, FieldValues } from "react-hook-form";

function SelectList({
  isMultiState,
  control,
  isFilter
}: {
  isMultiState: IsMultiStateProps;
  control: Control<FieldValues, any>;
  isFilter?:boolean
}) {
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
    <div className="select-list common-flex">
      <SelectInput
        label="Departments"
        options={departments}
        placeholder="Select department"
        isMulti={isMultiState.isDepartmentsMulti}
        control =  {control}
        fieldName = "departments"
        isFilter={isFilter!}
      />

      <SelectInput
        label="Designations"
        options={designations}
        placeholder="Select designation"
        isMulti={isMultiState.isDesignationsMulti}
        control={control}
        fieldName = "designations"
        isFilter={isFilter!}
      />

      <SelectInput
        label="Employment Modes"
        options={empModes}
        placeholder="Select employment mode"
        isMulti={isMultiState.isEmpModesMulti}
        control={control}
        fieldName = "employment_modes"
        isFilter={isFilter!}
      />

      <SelectInput
        label="Skills"
        options={skills}
        placeholder="Select skill"
        isMulti={isMultiState.isSkillsMulti}
        control={control}
        fieldName = "skills"
        isFilter={isFilter!}
      />
    </div>
  );
}
export default SelectList;
