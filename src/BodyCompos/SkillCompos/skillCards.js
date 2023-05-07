import "./skillCards.css"


const SkillCards = ({skillProp})=>{
    console.log(skillProp)
  
    return(<>
   <div className="card-outer">
   <figuer className="logo-outer">
   <img  className="logo-img"/></figuer>
   <div className="card-text-box">
    <span className="title">Name</span>
    <span className="skill-loading">Loading</span>
   </div>  
   </div>
    </>)
}

export default SkillCards