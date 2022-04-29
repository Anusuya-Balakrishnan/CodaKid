import React from "react";
import {FaGreaterThan, FaRegPlayCircle} from "react-icons/fa";
function Button(props){
    return <div className="buttonClass"> <button type ="button" className="button-header">{props.content} <FaGreaterThan /></button></div>;
}
export default Button;