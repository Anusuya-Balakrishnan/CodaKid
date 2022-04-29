import React from "react";
function EachReason(props){
    var fontcolor=props.color;
    return(
    <div className="Each-Reason">
    <div class="Reason-image ">
        <img src={props.image} alt="student-image"/>
    </div>
    <div class="Reason-title" style={{color:fontcolor}}><p>{props.title}</p></div>
    <div class="Reason-content"><p>{props.content}</p></div>
    <div class="Reason-end"><a  style={{color:fontcolor}}  href="https://codakid.com/top-7-kids-coding-languages-of-2018/">READ MORE</a></div>
    </div>);
}
export default EachReason;