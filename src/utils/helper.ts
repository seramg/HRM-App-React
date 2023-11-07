import { UseFormReset, FieldValues } from "react-hook-form";
import { Skill } from "../core/interfaces/interface.ts";

export function transformArrayToOptionsList(array: string[]) {
  return array.map((value: string) => ({
    value: value,
    label: value,
  }));
}

export function transformArrayToSkillOptionsList(skills: Skill[]) {
  return skills.map((skill) => ({
    value: skill.id,
    label: skill.name,
  }));
}

export function resetSelects(reset: UseFormReset<FieldValues>) {
  const resetValues = {
    departments: "",
    designations: "",
    skills: "",
    employment_modes: "",
  };
  reset(resetValues);
}

