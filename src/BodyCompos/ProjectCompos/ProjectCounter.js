
import "./projectsCounter.css"
import { ProjectHelper } from "../../Assets/Project_Assets/projectUtil"
import ProjectCards from "./ProjectCards"

const ProjectCounter = () =>{
    console.log(ProjectHelper)
    return(<>
        <div className="project-counter">
            <h1 className="heading"> Projects</h1>
            <div className="project-display">
                <ProjectCards ProjectHelper={ProjectHelper}/>
            </div>
        </div>
    </>)
}


export default ProjectCounter