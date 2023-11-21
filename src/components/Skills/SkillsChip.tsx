import { Skill } from "../../core/interfaces/interface";

function SkillsChip({ skills }: { skills: Skill[] }) {
  return (
    <div className="skill-list">
      {skills.map((skill: Skill) => {
        return (
          <span className="skill-card" key={skill.id}>
            {skill.name}
          </span>
        );
      })}
    </div>
  );
}
export default SkillsChip;
