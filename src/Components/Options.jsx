import React from "react";
import Button from "./Button";
function Options(){
    return<section className="Options">
        <div className="optionsMain">
<div className="optionsTitle"><h1>TWO GREAT OPTIONS</h1></div>
<div className="option">

    <div className="optionsFirstParent">
    <div className="optionsFirstTitleParent">
    <h3>ONLINE SELF STUDY</h3>
    </div>
        <div className="optionsFirst">
            <div><h3><p>NEW & IMPROVED <br />LEARNING PLATFORM </p></h3></div>
            <div className="opstionColor">
                <div className="numberParent">
                    <div className="number number72"><p>72 </p></div>
                    <div className="word">COURSES</div>
                </div>
                <div className="numberParent">
                    <div className="number number300" > <p>300</p></div>
                    <div className="word">QUESTS</div>
                </div>
                <div className="numberParent">
                    <div className="number number750"><p>750</p></div>
                    <div className="word">CHALLENGES</div>
                </div>
            </div>
            <div className="optionContentfirst"><p>New Courses Added Frequently!</p></div>
            <Button content="START FREE TRIAL" />
        </div>
    </div>

    <div className="optionsSecondParent">
        <div className="optionsFirstTitleParent">
            <h3>PRIVATE ONLINE TUTORING</h3>
        </div>
        <div className="optionsSecond"> 
            <div ><h4><p>Free access to CodaKid’s coding platform</p> for homework and side-projects</h4></div>
            <div className="optionContentsecond"><p>Online live instruction from USA-based Instructors from universities such as Stanford, MIT, Brown, and Cornell.</p></div>
            <Button content="START FREE TRIAL" />
        </div>
    </div>
</div>

</div>
    </section>;
}
export default Options;