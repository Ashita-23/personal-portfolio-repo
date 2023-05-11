import { useState } from "react"
import "./navigation.css"
import SunImg from "../../Assets/Compo_images/sun.png"
import HalfMoon from "../../Assets/Compo_images/half-moon.png"
import BG_Animation from "../../Assets/Animation/BG_Animaton"
import { useState } from "react"
const Navigation = () => {

    const [LightMode , setDarkMode] = useState(false)
    
    function DarkLightMode (){
        if(LightMode === false){
            setDarkMode(true)
        }else if(LightMode ===true){
            setDarkMode(false)
        }
    }


    return(<>
     <nav className="nav-outer">
        {/* <div className="logo-box">Ashita</div> */}
        <BG_Animation/>
        <ul className="">
            <li><a href="#Home"><i className="fa-solid fa-house-user"></i></a></li>
            <li><a href="#about"><i className="fa-solid fa-circle-info"></i></a></li>
            <li><a href="#skills"><i className="fa-solid fa-code"></i></a></li>
            <li><a href="#project"><i className="fa-regular fa-folder-open"></i></a></li>
            <li><a href="#footer"><i className="fa-regular fa-paper-plane"></i></a></li>
            </ul>
        <div className="Dark-light-mode">
           <button className="DLM-btn" onClick={()=>DarkLightMode()}>{LightMode?<i className="fa-solid fa-lightbulb DM-img"></i>: <i className="fa-regular fa-lightbulb LM-img"></i>}</button>
        </div>
    
     </nav>
    </>)
}

export default Navigation