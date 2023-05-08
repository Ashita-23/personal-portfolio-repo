import "./skillCounter.css";
import SkillCards from "./skillCards";
import hashtagImg  from "../../Assets/Compo_images/hashTag.png"
import { skillsName } from "../../Assets/Skill_Assets/utils";

const SkillCounter = () => {
  // console.log(skillsName)
  return (
    <>
      <div className="skill-counter">
        {/* <h1 ">Skill</h1> */}
        <div className="skill-inner-box">
        <div className="skill-display">


         {
          skillsName.map((cards) => {
  {/* console.log(cards) */}

            return(<>
          <SkillCards skillProp={cards} key={cards.id} /></>)
          })
         }
        
        </div>
        <div className="hash-img-outer">
        <figcaption className="skill-heading" >My Skills </figcaption>
        <figure className="hash-img-inner"><img src={hashtagImg} alt="skillImage" className="hashImage" /></figure>
        </div>
        </div>
      </div>
    </>
  );
};

export default SkillCounter;
