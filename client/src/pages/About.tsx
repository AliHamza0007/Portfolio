import React from 'react'
import logo from "../assets/profile.gif";
import RubberBand from "react-reveal/RubberBand";
import './skills.css'
import ScrollAnimation from "react-animate-on-scroll";
 const  About:React.FC=()=> {
 
  const image={
   width:'100%', padding:'80px',
   borderRadius:'30%',
  
  }
  
  return (
<>
<div className="container pb-5 h-100">
<div className="container techstack">
<RubberBand>
          <h2 className="col-12  text-center text-uppercase">
            About Me
          </h2>
          <hr />
          
        </RubberBand> 
        </div>
<div className="row py-2 ">
<div className="col-md-6">
  <img className="img-responsive   " style={image} src={logo} alt="Ali Hamza"/>
</div>
<div className="col-md-6 pt-5">
  <h3 className="text-center">Summary</h3><hr/>

  <div className="container-fluid">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <h6>
          Hi there! I'm ALI HAMZA, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React,
          </h6>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
        <h6>
  Highly motivated and detailed-oriented frontend developer with experience in HTML, CSS, JavaScript and 
React JS. Passionate about creating user-friendly web applications that are both functionally and visually 
appealing. Seeking a challenging position as a frontend developer where I can utilize my skills and knowledge 
to contribute to the success of the company
  </h6>
        </ScrollAnimation>
      
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <h6>
          So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!</h6>
        </ScrollAnimation>

      
        </div>
      </div>
     
  </div>
  </div>




</>
  )
}
export default About;