import {useEffect , useState} from "react" 
import "./home.css"

const Home = () =>{





    return(<>
        <div className="home-outer">
        <div className="intro-outer">
            <h1 className="name-text"><span className="first-text">Hello ,</span> I am Ashita </h1>
            <p className="title-text-box"><span className="sec-text">{ "Frontend Developer" }</span></p>
            <div className="home-btn-group">
            <button className="home-btn"><i className="fa-brands fa-github home-btns"></i></button> {" "}<button className="home-btn"><i class="fa-brands fa-linkedin-in home-btns"></i></button>

            </div>
            </div>
        </div>
        {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
    </>)
}

export default Home 