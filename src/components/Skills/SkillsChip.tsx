import { useEffect, useRef } from "react";
import { Skill } from "../../core/interfaces/interface";

function SkillsChip({
  skills,
  handleSkillsOverflow,
}: {
  skills: Skill[];
  handleSkillsOverflow: (isOverflow: boolean) => void;
}) {
  const skillsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;

    const handleResize = () => {
      if (skillsContainer) {
        const isOverflowing =
          skillsContainer.scrollWidth > skillsContainer.clientWidth;

        handleSkillsOverflow(isOverflowing);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize); // calculate the scrollwidth whenever the window gets resized

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
