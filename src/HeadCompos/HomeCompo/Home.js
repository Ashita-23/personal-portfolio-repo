import React from "react" 
import "./home.css"
import homeImg from "../../Assets/Compo_images/home_img.png"
import useStatus from "../../AppUtils/UserStatus"
// import BG_Animation from "../../Assets/Animation/BG_Animaton"

const Home = () =>{

    const IsOnline = useStatus()




    if (!IsOnline  ){
        return <h1>your network coneaction is gone .....</h1>
    }
    return (<>
        <div className="home-outer" id="Home">
        {/* <BG_Animation></BG_Animation> */}
        <div className="intro-box">
        <div className="intro-note">
            <h1 className="name-text"><span className="first-text">Hello ,</span> I am Ashita </h1>
            <p className="title-text-box"><span className="sec-text">{ "Frontend Developer" }</span></p>
            <div className="home-btn-group">
            <button className="home-btn">
           <a href="https://github.com/Ashita-23" target="blank"><i className="fa-brands fa-github home-btns"></i></a></button> {" "}
            <button className="home-btn">
           <a href="https://www.linkedin.com/in/ashita-k-0bb800248/" target="blank"> <i className="fa-brands fa-linkedin-in home-btns"></i></a></button>
            </div>
            </div>
            <div className="intro-image">
                <figure><img src={homeImg} alt="homeImg" className="home-img"/></figure>
            </div>
          
            </div>
        </div>
        {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
    </>)
}

export default Home 