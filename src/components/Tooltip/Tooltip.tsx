import { useState, useEffect } from "react";
import { Skill } from "../../core/interfaces/interface.ts";
import TooltipWrapper from "./tooltip";

function Tooltip({ skills }: { skills: Skill[] }) {
  const [mousePosition, setMousePosition] = useState({ x: 0 });

  //find mouse position on each mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: (e.clientX / window.innerWidth) * 100 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);//calculate the mouseposition whenever the mouse moves
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skillsList = skills.map((skill) => skill.name).join(", ");

  return <TooltipWrapper $left={mousePosition.x}>{skillsList}</TooltipWrapper>;
}

export default Tooltip;
