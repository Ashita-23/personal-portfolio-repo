import React from "react" 
import ReactDOM from "react-dom/client"
import "/index.css"
import Navigation from "./src/HeadCompos/NavCompo/Navigation"
import Home from "./src/HeadCompos/HomeCompo/Home"

const App = () =>{
    return(<>
        <Navigation/>
        <Home/>
    </>)
}


const root = ReactDOM.createRoot(document.getElementById("root")) 

root.render(<App/>)