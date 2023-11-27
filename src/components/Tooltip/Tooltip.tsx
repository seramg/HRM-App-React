import { Skill } from "../../core/interfaces/interface.ts"
import TooltipWrapper from './tooltip';


function Tooltip({skills}:{skills: Skill[]}){

    const skillsList=skills.map(skill=>skill.name).join(", ");

    return <TooltipWrapper >{skillsList}</TooltipWrapper>
}

export default Tooltip;