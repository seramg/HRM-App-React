import { useContext } from "react";
import DataContext from "../../../core/store/DataContext";
import SelectFilter from "./SelectFilter";


function SelectFilterList() {
    const { departments, designations, employment_modes, skills } =
        useContext(DataContext);

    return (
        <div className="select-list common-flex">
            <SelectFilter
                label="Departments"
                options={departments}
                placeholder="Select department"
                isMulti={false}
                fieldName="department"
            />
            <SelectFilter
                label="Designations"
                options={designations}
                placeholder="Select designation"
                isMulti={false}
                fieldName="designation"
            />
            <SelectFilter
                label="Employment Modes"
                options={employment_modes}
                placeholder="Select employment modes"
                isMulti={false}
                fieldName="employment_mode"
            />
            <SelectFilter
                label="Skills"
                options={skills}
                placeholder="Select skills"
                isMulti={true}
                fieldName="skills"
            />
        </div>
    );
}



export default SelectFilterList;