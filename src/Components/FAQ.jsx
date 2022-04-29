import React,{useState} from "react"
export default function FAQ(props){
    const[color,setColor]=useState(false);
    const[icon,setIcon]=useState("chevron-down-outline");
    // <ion-icon name="chevron-up-outline"></ion-icon>
    // <ion-icon name="chevron-down-outline"></ion-icon>

    var id=props.idName
    function setClick(){
        if(!color){
            setIcon("chevron-up-outline");
            setColor(true);
            document.getElementById(id).style.display="block";

        }
        else{
            setIcon("chevron-down-outline");
            setColor(false);  
            document.getElementById(id).style.display="none";
            
        }  
    }
    if(color){
        var fontcolor="#EF4136";
    }
    return <section className="FAQ">
    <div className="FAQMain" >
        <div className="FAQHeading">
            <div className="Question" style={{backgroundColor:fontcolor}}><h5 >Q:</h5></div>
            <div className="QuestionContent" onClick={setClick}><h5>{props.question}</h5></div>
            <button className="FAQButton" style={{color:fontcolor}} onClick={setClick}><ion-icon name={icon}></ion-icon></button>
        </div>
        <div className="FAQContent">
            <div id={id}>
            {props.paragraph}
            </div>

        </div>
    </div>



    </section>
}