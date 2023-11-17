import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import SelectInput from "./SelectInput.tsx";

function SelectList() {
  const { departments, designations, employment_modes, skills } =
    useContext(DataContext);

  return (
    <div className="select-list common-flex">
      <SelectInput
        label="Departments"
        options={departments}
        placeholder="Select department"
        isMulti={false}
        fieldName="department"
      />
      <SelectInput
        label="Designations"
        options={designations}
        placeholder="Select designation"
        isMulti={false}
        fieldName="designation"
      />
      <SelectInput
        label="Employment Modes"
        options={employment_modes}
        placeholder="Select employment modes"
        isMulti={false}
        fieldName="employment_mode"
      />
      <SelectInput
        label="Skills"
        options={skills}
        placeholder="Select skills"
        isMulti={true}
        fieldName="skills"
      />
    </div>
  );
}

export default SelectList;
