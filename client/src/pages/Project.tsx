import Spin from "react-reveal/Spin";
import "./Projects.css";
import port from "../assets/portfolio.png"
import linkedin from "../assets/linkedin.png"

const Projects = () => {

  const linkedinLink=`${process.env.REACT_APP_LINKEDIN_LINK}`;
  const portfolioGithub=`${process.env.REACT_APP_PORTFOLIO_GITHUB}`;
  const confortZoneGithub=`${process.env.REACT_APP_CONFORTZONE_GITHUB}`;
  const confortZoneLiveLink=`${process.env.REACT_APP_CONFORTZONE_LINK}`;
  
  return (
    <>
      <div className="container mb-3 py-1 pb-3 project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
         These are the projects that I created and Learn some new things ,thoughts And gain some new Tricks of my skills. 
        </p>
        {/* card design */}
        <div className="row">
          <Spin>
            <div className="col-md-4 mb-1">
              <div className="card rounded">
                <div className="card-image">
                 <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">Mern Stack</span>
                  <img className="img img-fluid img-responsive"

                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="ConfortZone"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      ConfortZone Shopping Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={confortZoneGithub}
                    target="_blank"

                     rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={confortZoneLiveLink}
                    target="_blank"
                     rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image img-fluid img-responsive">
                 <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React TypeScript</span>
                  <img 

                    src={port}
                    height={"210px"}
                    width={"100%"}
                    alt="PortFolio || ALI HAMZA"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">TypeScript</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
Portfolio                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
href={portfolioGithub}  
                target="_blanked"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href="/"
                    target="_blanked"

                  >
                    Live Demo
                  </a>
                
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-1">
              <div className="card rounded">
                <div className="card-image img-fluid img-responsive">
                 <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">LinkedIn</span>
                  <img 
 height={"210px"}
 width={"100%"}
src={linkedin}                    alt="LinkedIn"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">React Developer</span>
                  <span className="card-detail-badge">Mern Developer</span>
                
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      LinkedIn Profile
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={linkedinLink}
                    target="_blank"
                    rel="noreferrer"

                  >
                    View Profile
                  </a>
                
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
