import React from "react";

function FeaturesChild(props){
    var fontvalue=props.Titlefont
return(<div className="FeaturesChild">
<div className="Features-Icon" ><img src={props.image}/></div>
<div className="Features-Title" style={{color:fontvalue}}><h3>{props.title}</h3></div>
<div className="Features-Content"><p>{props.content}</p></div>
</div>);

}
export default FeaturesChild;