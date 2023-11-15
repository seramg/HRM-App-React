import { Skill } from "../../core/interfaces/interface";
import SkillsChipWrapper from "./skillsChip";

function SkillsChip({ skills }: { skills: Skill[] }) {
    return <SkillsChipWrapper className="common-flex">
        {skills.map((skill: Skill) => {
            return <p className="skill">{skill.name}</p>
        })}
    </SkillsChipWrapper>
}
export default SkillsChip;