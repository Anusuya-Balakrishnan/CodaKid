import React from 'react';
import First from "./First";
import Second from "./Second";
import StudentReview from "./StudentReview";
import ParentReview from "./ParentReview";
import Reason from "./Reason";
import CodingArticle from './CodingArticle';
import Courses from './Courses';
import Features from "./Features";
import Options from './Options';
import Focus from './Focus';
import Try from './Try';
import Minecraft from './Minecraft';
import FAQFullContent from './FAQFullContent';
import SecondSectionPart from './SecondSectionPart';
function App(){
    return( <div>
    <First />
    <SecondSectionPart />
    <Second />
    <Options />
    <Focus />
    <Reason/>
    <Try />
    <Features />
    <Minecraft />
    <StudentReview />
    <FAQFullContent />
    <CodingArticle />
    {/* <Courses /> */}
    <ParentReview />
     
    
  </div>);
}
 export default App;