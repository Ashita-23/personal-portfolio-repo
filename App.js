import React from "react" 
import ReactDOM from "react-dom/client"
import "/index.css"
import Navigation from "./src/HeadCompos/NavCompo/Navigation"
import Home from "./src/HeadCompos/HomeCompo/Home"
import SkillCounter from "./src/BodyCompos/SkillCompos/SkillCounter"
import Footer from "./src/FooterCompos/Footer"

const App = () =>{
    return(<>
        <Navigation/>
        <Home/>
        <SkillCounter/>
        <Footer/>
    </>)
}


const root = ReactDOM.createRoot(document.getElementById("root")) 

root.render(<App/>)