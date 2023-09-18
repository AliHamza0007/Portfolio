import {FC} from "react";
import Typewriter from "typewriter-effect";
import {Fade} from "react-reveal";
import Resume from '../assets/cv/7Ali_Hamza.pdf'
import Hello from '../assets/Hello.gif'
import Banner from '../assets/banner.gif'
import { BsWhatsapp } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
const Home:FC = () => {
  const image={
    backgroundImage:`url(${Banner})`,backgroundRepeat:"no-repeat",
    width:'100%',
    height:"100%"
  }
  return (
    <div className="container-fluid py-5 my-5" style={image} >
   <div className="pt-5">
     

        <div className="container py-5">
        <div className="row">
        <div className="col text-light">
          <Fade right>
            <h2>Hi <img src={Hello} alt="Hello" width="35px"/> I'm a</h2>
            <h1 >
              <Typewriter 
                options={{
                  strings: [
                    "React JS Developer!",
                    "FrontEnd  Developer!",
                    "Full Stack developer!",
                    "MERN Stack developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom >
            <div className="row pt-5">
            <div className="col ">
              <ReactWhatsapp
              className="btn btn-primary  px-4"
              number="+92097300913"
            >
              <BsWhatsapp />  Hire Me
            </ReactWhatsapp>
               
          
              <a className="btn btn-warning px-4 mx-2 " 
              href={Resume}
              target="_blank" 
              rel="noreferrer"
               download="7Ali_Hamza.pdf">
                 Resume
              </a>
            </div>
            </div>
          </Fade>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
