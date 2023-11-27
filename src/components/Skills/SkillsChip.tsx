import { useEffect, useRef } from "react";
import { Skill } from "../../core/interfaces/interface";

function SkillsChip({
  skills,
  handleSkillsOverflow,
}: {
  skills: Skill[];
  handleSkillsOverflow: () => void;
}) {
  const skillsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;

    if (skillsContainer) {
      const isOverflowing =
        skillsContainer.scrollWidth > skillsContainer.clientWidth;

      if (isOverflowing) {
        handleSkillsOverflow();
      }
    }
  }, [skills, skillsContainerRef]);

  return (
    <div className="skill-list overflow-ellipsis" ref={skillsContainerRef}>
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
