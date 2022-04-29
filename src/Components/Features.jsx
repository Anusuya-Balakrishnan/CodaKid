import React from "react";
import FeaturesChild from "./FeaturesChild";
import EachReason from "./EachReason"
function Features(){
    return <section id="features">
<div className="Features-Main">
<FeaturesChild  Titlefont="#00A14B" image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/benefits/1.png" 
title="Professional Tools and Languages" content="CodaKid students learn professional languages such as Python, JavaScript, and Java while using the same tools used at companies like Google, Facebook, and Intel."/>

<FeaturesChild Titlefont="#F2764C" image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/benefits/2.png" 
title="Build Real Games and Software" content="Make professional grade games and software using cutting edge technology."/>

<FeaturesChild  Titlefont="#7F3F98"  image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/benefits/3.png" 
title="Fast, Helpful Support "content="Our friendly teachers will help your child through messaging and screen share"/>

<FeaturesChild  Titlefont="#00AEEF" image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/benefits/4.png" 
title="Future Innovators Are Born Here" content="Make Something Extraordinary with CodaKid Coding for Kids. Our award-winning courses for ages 8 and up impart real 21st century skills."/>

<FeaturesChild Titlefont="#ED1C24"  image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/benefits/5.png" 
title="Online Support from Friendly Teachers" content="Whether students require set up assistance, have a question, or need support, our team is here to help every step of the way!"/>


</div>

    </section>;
}
export default Features;