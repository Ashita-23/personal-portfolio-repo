
import "./skillCounter.css"
import SkillCards from "./skillCards"
import { skillsName } from "../../Assets/Skill_Assets/utils"



const SkillCounter = ()=>{
    // console.log(skillsName)
    return(<>
        <div className="skill-counter">
            <h1 className="skill-heading">Skill</h1>
            <div className="skill-display">
   <SkillCards skillProp = {skillsName}  />
            </div>
        </div>
    </>)
}

export default SkillCounter