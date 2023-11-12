import { useContext } from "react";
import { Control, FieldValues } from "react-hook-form";
import { IsMultiStateProps } from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import SelectInput from "./SelectInput.tsx";

function SelectList({
  isMultiState,
  control,
  isFilter,
}: {
  isMultiState: IsMultiStateProps;
  control: Control<FieldValues, any>;
  isFilter?: boolean;
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
      />

      <SelectInput
        label="Designations"
        options={designations}
        placeholder="Select designation"
        isMulti={isMultiState.isDesignationsMulti}
        control={control}
        fieldName="designation"
        isFilter={isFilter!}
      />

      <SelectInput
        label="Employment Modes"
        options={employment_modes}
        placeholder="Select employment mode"
        isMulti={isMultiState.isEmpModesMulti}
        control={control}
        fieldName="employment_mode"
        isFilter={isFilter!}
      />

      <SelectInput
        label="Skills"
        options={skills}
        placeholder="Select skill"
        isMulti={isMultiState.isSkillsMulti}
        control={control}
        fieldName="skills"
        isFilter={isFilter!}
      />
    </div>
  );
}
export default SelectList;
