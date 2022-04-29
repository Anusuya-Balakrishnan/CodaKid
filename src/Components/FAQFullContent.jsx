import React from "react";
import FAQ from './FAQ';
export default function FAQFullContent(){

    const tag = <h1>test</h1>
        var content6=<p className="content6">
        <h5>Here are some of the concepts we teach: </h5>
            <ul>
                <li>Booleans </li>
                <li>Conditionals,</li>
                <li>Loops</li>
                <li>Variables</li>
                <li>Methods and Functions</li>
                <li>Arrays</li>
                <li>Switch Statements</li>
                <li>And much more!</li>
            </ul>
        <h5>On top of these essential programming concepts, we also teach them how to think 
        critically, problem solve, and help them become proficient in math!</h5>
        </p>;
    var mapFaq=[<FAQ idName="1" question="What is CodaKid?"
    paragraph="CodaKid is a kids coding platform that teaches kids 
        how to use real programming languages and professional tools by creating games, 
        coding apps, programming drones, building websites, and more."
        />,
        <FAQ idName="2" question="Who are the people behind CodaKid?"
        paragraph="Our founder and CEO, David Dodge, is a game designer and 
        software architect who began working in product development for SEGA in the early 90s, 
        and who later designed top rated games for the Sony PlayStation and the PC. 
        David is credited on over 30 titles for SEGA, Sony, and PC."/>,
        <FAQ idName="3" question="Where is CodaKid based?"
        paragraph="CodaKid is based in sunny Scottsdale, Arizona in the United States."
    />,<FAQ idName="4" question="What makes CodaKid different from other kids coding courses and platforms?"
        paragraph="CodaKid’s award-winning courses feature . Our online academy has taught over 50,000 kids 
        and teens how to program using the same professional languages and tools used by professionals at 
        companies like Facebook, Google, and Amazon. CodaKid has two great ways to learn how to code:
            1) Our self-paced online courses
            2) Our private 1-on-1 online lessons.

            CodaKid’s self-paced online courses are great for self-starters and 
            feature over 700 hours of student projects. CodaKid also provides awesome support 
            from a team of engineers and teachers to help you solve problems 
            through chat or screen share if you ever get stuck or have questions.
            CodaKid’s private 1-on-1 online lessons are the fastest way to learn how to code. 
            Working 1-on-1 over Zoom with your own private instructor, CodaKid students work their way 
            through CodaKid’s structured curriculum and complete weekly homework assignments, 
            receive weekly progress reports, and more."
        />,<FAQ idName="5" question="Which computer languages do you teach?"
            paragraph="CodaKid teaches Python, JavaScript, Java, Lua, Scratch, C#, HTML, CSS, 
            and the Unreal Blueprints scripting language - with more on the way! With CodaKid, 
            students gain experience writing real code using the same tools that the pros use. 
            We have a unique way of making our courses accessible to absolute beginners as young as age 7. 
            We hope you'll give them a try!"
        />,
        <FAQ idName="6" question="What concepts will my child learn in a CodaKid course?"
            paragraph={content6}
        />,
        <FAQ idName="7" question="Do you have any specials for families with two children interested in private tutoring?"
                paragraph="Yes! CodaKid features a 2-on-1 sibling special, allowing students to invite a friend or sibling to their private class for no additional charge."
            />,
        <FAQ idName="8" question="What are your support hours?"
                paragraph="CodaKid offers online support 7 days a week! For the quickest responses, please contact us any time Monday- Friday."
            />]
    return<section id="FAQFullContent">
    <div className="FAQHeadingContent">
        <h3>CODAKID CODING FOR KIDS FAQ'S</h3>
        <p>Click the toggle below to get your frequently asked coding for kids questions answered!</p>
    </div>
    {mapFaq}
    <p>Didn’t find what you were looking for? Send us a question and we’ll get back to you.</p>
    <div className="FAQFullContentEnd">
        <input type="text"  className="FAQFullContentText" placeholder="TYPE YOUR EMAIL TO ASK A QUESTION"></input>
        <button type ="button" className="FAQFullContentButton"> GET STARTED <ion-icon  className="greaterthanIcon" name="chevron-forward-outline"></ion-icon></button>
    </div>




    </section>;
}