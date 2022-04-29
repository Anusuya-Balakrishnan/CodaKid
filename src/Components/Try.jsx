import React from "react";
import {FaGreaterThan, FaRegPlayCircle} from "react-icons/fa";
function Try(){
    
    return<section className="TrySection">
        <div className="TryMain">
                <div className="TryImage">
                    <img src="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/banner_1.jpg" alt="student"/>
                </div>
                <div className="TryContentBackground">    
                        <div className="TryContent "> 
                            <p className="TryTitle">
                            Try for Free and Get Access to Dozens of Online Computer Coding Classes for Kids!
                            </p>
                            <div className="TryList">
                            <p className="TryList1">72 Computer Coding Courses</p>
                            <p className="TryList2">300 Online Coding Quests</p>
                            <p>750 Computer Coding Challenges</p>
                            </div>
                            <div className="TryButton">
                                <button><p>TRY FOR FREE <FaGreaterThan /></p></button>
                                <p>Ensure Your Child Is Not Left Behind With Digital Trends! </p>
                            </div>
                            <div className="TryEnd">
                                <p>Or... <a href="https://codakid.com/buy-a-gift/" onClick={()=>{return({color:"#F26522"})}}>Click Here </a>To Give As Gift!</p>
                            </div>
                        </div>
                </div>
        </div>

    </section>;
}
export default Try;