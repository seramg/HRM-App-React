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


