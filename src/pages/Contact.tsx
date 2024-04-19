import React, { useState } from "react";
import { toast } from "react-toastify";
import ReactWhatsapp from "react-whatsapp";

import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsWhatsapp,BsLinkedin } from "react-icons/bs";
const Contact = () => {
 
const whatsappNumber=`${process.env.REACT_APP_WHATSAPP_NUMBER}`;
const linkedinLink=`${process.env.REACT_APP_LINKEDIN_LINK}`;
const githubLink=`${process.env.REACT_APP_GITHUB_LINK}`;
const facebookLink=`${process.env.REACT_APP_FACEBOOK_LINK}`;


  const [name, setName] = useState<string>("");
  const [result, setResult] = useState<Response | null>(null);
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
type Response={
  success:boolean,
  message:string,
}
  //handle submit button
  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("PLease Provide all fields");
      }
      let res  = await fetch(`${process.env.REACT_APP_API}/api/v1/portfolio/sendEmail`, {method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({name,
        email,
        msg,})
     
      });
      const Data= await res.json();
    setResult(Data);
      //validation success
      if (result?.success) {
        toast.success(result.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" container my-2 p-4 shadow">
        <div className="card  border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="Contact_US"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <ReactWhatsapp
                        className="m-0 p-0"
              number={whatsappNumber}
            >
                       <BsWhatsapp color="green" size={30} className="ms-2" />
            </ReactWhatsapp>
                      <a href={linkedinLink} >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                      <a href={githubLink} >
                        <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                    
                      <a href={facebookLink} >
                       <BsFacebook color="blue" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3 form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3 form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3 form-control"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button btn btn-success" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
