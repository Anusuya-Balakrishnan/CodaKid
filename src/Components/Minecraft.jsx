import React, {useState} from "react";
import Slide from "./Slide";
import {FaGreaterThan, FaLessThan} from "react-icons/fa";

export default function Minecraft(){


    var slideBody=document.getElementsByClassName("SlideBody")[0];
   const[value,setWidth] =useState(500);
        function setIncreaseWidth(){
        if(value>2200){
            value=1200;
        }
        else{
            setWidth(value+200);
            slideBody.scrollTo(value,0);
        }
        
        }
        function setDecreaseWidth(){
            if(value==0){
            value=500
            }
            else{
            setWidth(value-200);
            slideBody.scrollTo(value,0);
            }
            
        }
        
    // var value=1000;
    // function setIncreaseWidth(){
    //     value=value+500;
    //     slideBody.scrollTo(value,0);
    // }
    // function setDecreaseWidth(){
    //     value=value-500;
    //     slideBody.scrollTo(value,0);
    // }
    return<section className="Minecraft">
            <div className="buttonFirst">
                <button type="button" onClick={setDecreaseWidth}><FaLessThan /></button>
            </div>
                <div className="SlideBody"> 
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/EW_CoursePoster.png" 
                        title="Mod Creation 1: Epic Weapons"
                        paragraph="In this popular Minecraft modding course, students will design and code a series of over the top weapons, including our infamous Cow Cannon!"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/BaB_CoursePoster.png" 
                        title="Mod Creation 1: Build and Boom!"
                        paragraph="In this explosive coding course, students will design and code a custom structure and then create massive explosions using Java! Students will deepen their understanding of loops."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/house_in_a_box_600x600.png" 
                        title="Mod Creation 1: House In A Box"
                        paragraph="In this popular mod, students will design and code a house that appears instantly with code. Students will deepen their understanding of parameters, variables, array lists, and loops."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/infinite-items-thumb.png" 
                        title="Mod Creation 1: Infinite Items 1.12"
                        paragraph="In this fiery course, students will customize the AI of their creature (from Create A Creature) to create a fearsome fireball attack. Students will learn about Artificial Intelligence and randomization"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />

                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/ai_and_fireballs_thumb.jpg" 
                        title="Mod Creation 1: Artificial Intelligence and Fireballs"
                        paragraph="In this fiery course, students will customize the AI of their creature (from Create A Creature) to create a fearsome fireball attack. Students will learn about Artificial Intelligence and randomization"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/minecraft_dragon_rider.png" 
                        title="Mod Creation with Minecraft: Dragon Rider"
                        paragraph="Make your own custom fire-ball-shooting Ender dragon and equip it with armor! Learn and practice with conditionals, loops, variables, methods, and more!"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/BoxArtCropped.png" 
                        title="Mod Creation 1 with Minecraft 1.8"
                        paragraph="This Minecraft coding course is CodaKid's original Mod Creation classic and provides a whopping 35+ hours of award-winning student projects. We cover key concepts such as parameters, variables, conditional, loops, and arrays."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/DimensionsCropped.png" 
                        title="Mod Creation 2 with Minecraft 1.8"
                        paragraph="This creative and captivating Minecraft coding course teaches students how to make 3 custom dimensions in Minecraft. We cover more advanced methods, loops, and conditionals."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    
                </div>
        <div className="buttonLast">
            <button type="button" onClick={setIncreaseWidth}> <FaGreaterThan /></button>
            </div>
</section>;
}