import React from "react";
import {FaGreaterThan, FaRegPlayCircle} from "react-icons/fa";

function First(){
    return<section  id="first-section">
<div className="headingMain">
    <div className="headingImage"></div>
    <div className="headingContent">
    <div className="Heading-first">
        <h2>ONLINE CODING FOR KIDS</h2>
        <h3>The Fastest Way To Give Your Child Or Teen 21st Century Skills</h3>
    </div>
    <div className="Heading-center">
        <p>Unleash Their Potential <br /> With Real Coding Instruction</p>
    </div>
    <div className="button-div">
        <div className="EachButton">
            <button  type ="button" className="button-header"><p>Self-Paced Courses<ion-icon  className="greaterthanIcon" name="chevron-forward-outline"></ion-icon></p>
            </button>
            <p>Free Trial - Instant Access  </p>
        </div>
        <div class= "vertical-line"></div>
        <div className="EachButton">
            <button type ="button" className="button-header violet"><p>1-on-1 Private Lessons<ion-icon className="greaterthanIcon" name="chevron-forward-outline"></ion-icon></p></button>
            <p>Private Online Coding Classes</p>
        </div>
    </div>
    <div className="Heading-footer">
        <p>Join our community of over 50,000 online students.<br />
        Learn real coding from expert teachers from the comfort of home.</p>
    </div>
    </div>
    <div className="Heading-footer-second"><h4>Get to know CodaKid  <a><FaRegPlayCircle /> </a> Play Video</h4></div>
    
</div>
    </section>;
}
export default First;