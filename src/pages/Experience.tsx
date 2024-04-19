import React from "react";
import RubberBand from "react-reveal/RubberBand";

import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
  return (
    <>
      
        <div className="container py-5 my-5 h-100 ">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1  text-center text-uppercase">
            Experience
          </h2>
          <hr />
          
        </RubberBand> 
      
          <ul className="py-5">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <li>
          React Developer
            </li>
        </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
         
<li>Self-Learning </li>
        </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
<li>Developed projects in React JS.</li>
         
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
         
<li>Using Typescript for most of my projects. Build state management structure using Redux Js Used HTML to create user-friendly web pages. </li>
         </ScrollAnimation>
         <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
         
<li>Extensive use of Bootstrap and custom CSS. </li>
         </ScrollAnimation>  <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
         
<li>Build reusable code and libraries for future use. </li>
         </ScrollAnimation>  <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
         
<li>Assure that all user input is validated before submitting to back-end Optimize applications for maximum speed </li>
         </ScrollAnimation>
</ul>
        </div>
    
    </>
  );
};

export default Experience;
