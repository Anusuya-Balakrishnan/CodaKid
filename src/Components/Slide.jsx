import React from "react";
export default function Slide(props){
    return(<section className="slide">
<div className="slideMain1">    
    <div className="slideMain">
        <div className="slideImage">
            <img src={props.image} alt="image" />
        </div>
        <div className="slideContent">
            <div className="slideTitle">
                <h3>{props.title}</h3>
            </div>
            <div className="slideParagraph">
                <p>{props.paragraph}</p>
            </div>
            <div className="slideAge">
                <h5>AGES {props.age}+</h5>
            </div>
            <div className="slideLast">
            <img src={props.LastImage} alt="slideLast"/>
            </div>
            <div className="slideSpan">
                <div className="span firstSpan"></div>
                <div className="span"></div>
                <div className="span"></div>
                <div className="span lastSpan"></div>
                <div className="zeroSpan">0%</div>
            </div>
        </div>
    </div>
</div>

    </section>);
}

{/* <Slide 
                image="" 
                title=""
                paragraph=""
                age="8"
                LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
            /> */}