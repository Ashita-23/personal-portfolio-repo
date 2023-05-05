import "./skillCards.css"


const SkillCards = ({skillProp})=>{
    console.log(skillProp)
  
    return(<>
<div className="card-outer">
<figure className="card-img-box">
    <img className="skill-img" src={""} alt="" />
</figure>
<figcaption className="skill-name"><a href="#skillName">{"name"}</a></figcaption>
</div>
    </>)
}

export default SkillCards