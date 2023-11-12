import { useContext } from "react";
import { Control, FieldValues } from "react-hook-form";
import {
  Employee,
  IsMultiStateProps,
} from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import SelectInput from "./SelectInput.tsx";
import { transformArrayToSkillOptionsList } from "../../utils/helper.ts";

function SelectList({
  isMultiState,
  control,
  isFilter,
  value,
}: {
  isMultiState: IsMultiStateProps;
  control: Control<FieldValues, any>;
  isFilter?: boolean;
  value?: Employee;
}) {
  const { departments, designations, employment_modes, skills } =
    useContext(DataContext);

  return (
    <div className="select-list common-flex">
      <SelectInput
        label="Departments"
        options={departments}
        placeholder="Select department"
        isMulti={isMultiState.isDepartmentsMulti}
        control={control}
        fieldName="department"
        isFilter={isFilter!}
        value={
          value?.department
            ? { value: value?.department, label: value?.department }
            : { value: "", label: "" }
        }
      />

      <SelectInput
        label="Designations"
        options={designations}
        placeholder="Select designation"
        isMulti={isMultiState.isDesignationsMulti}
        control={control}
        fieldName="designation"
        isFilter={isFilter!}
        value={
          value?.designation
            ? { value: value?.designation, label: value?.designation }
            : { value: "", label: "" }
        }
      />

      <SelectInput
        label="Employment Modes"
        options={employment_modes}
        placeholder="Select employment mode"
        isMulti={isMultiState.isEmpModesMulti}
        control={control}
        fieldName="employment_mode"
        isFilter={isFilter!}
        value={
          value?.employment_mode
            ? { value: value?.employment_mode, label: value?.employment_mode }
            : { value: "", label: "" }
        }
      />

      <SelectInput
        label="Skills"
        options={skills}
        placeholder="Select skill"
        isMulti={isMultiState.isSkillsMulti}
        control={control}
        fieldName="skills"
        isFilter={isFilter!}
        value={
          value?.skills ? transformArrayToSkillOptionsList(value?.skills) : []
        }
      />
    </div>
  );
}
export default SelectList;
