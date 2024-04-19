import Spin from "react-reveal/Spin";
import "./Projects.css";
import port from "../assets/portfolio.png"
import linkedin from "../assets/linkedin.png"
import bizkar from "../assets/Bizkar.png"
import fanatic from "../assets/Fanatic.com.png"
import Foodpanda from "../assets/Foodpanda.png"
import oesteopathe from "../assets/Osteopathe Montreal- Traitment.png"
import seatrans from "../assets/SEATRANS MARITIME S.A.png"
import speedCart from "../assets/Speed Cart.png"
import techno from "../assets/Techno_Sloution.png"
import solution from "../assets/SolutionM4 Theme Maker.png"
import mr_mrs from "../assets/mr&mrs.com.png"
const confortZone="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"


const Projects = () => {

  const linkedinLink = `${process.env.REACT_APP_LINKEDIN_LINK}`;
  const portfolioGithub = `${process.env.REACT_APP_PORTFOLIO_GITHUB}`;
  const confortZoneGithub = `${process.env.REACT_APP_CONFORTZONE_GITHUB}`;
  const confortZoneLiveLink = `${process.env.REACT_APP_CONFORTZONE_LINK}`;
  const bizkarGithub = `${process.env.REACT_APP_BIZKAR_GITHUB}`;
  const bizkarLiveLink = `${process.env.REACT_APP_BIZKAR_LINK}`;
  const oesteopatheGithub=`${process.env.REACT_APP_GITHUB_OESTEOPATHE}`;
  const oesteopatheLink=`${process.env.REACT_APP_OESTEOPATHE_LINK}`;
  const foodpandaGithub=`${process.env.REACT_APP_GITHUB_FOODPANDA}`;
  const foodpandaLink=`${process.env.REACT_APP_FOODPANDA_LINK}`;
  const speedCartGithub=`${process.env.REACT_APP_GITHUB_SPEED_CART}`;
  const speedcartLink=`${process.env.REACT_APP_SPEEDCART_LINK}`;
  const technoGithub=`${process.env.REACT_APP_GITHUB_TECHNO}`;
  const technoLink=`${process.env.REACT_APP_TECHNO_LINK}`;
  const mr_mrsGithub=`${process.env.REACT_APP_GITHUB_MR_MRS}`;
  const mr_mrs_Link=`${process.env.REACT_APP_MR_MRS_LINK}`;
  const fanaticLink=`${process.env.REACT_APP_FANATIC_LINK}`;
  const fanaticGithub=`${process.env.REACT_APP_GITHUB_FANATIC}`;
  const seaTransGithub=`${process.env.REACT_APP_GITHUB_SEATRANS}`;
  const seatransLink=`${process.env.REACT_APP_SEATRANS_LINK}`;
  const solutionGihub=`${process.env.REACT_APP_GITHUB_SOLUTIONM4}`;
  const solutionLink=`${process.env.REACT_APP_SOLUTIONM4_LINK}`;
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
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={fanatic}
                    alt="fanatic"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      fanatic Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={fanaticGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={fanaticLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={Foodpanda}
                    alt="Foodpanda"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">GoogleAPI</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      Foodpanda Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={foodpandaGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={foodpandaLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={mr_mrs}
                    alt="mr_mrs"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Framer </span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      mr_mrs Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={mr_mrsGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={mr_mrs_Link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={speedCart}
                    alt="speedCart"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Responsive </span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      speedCart Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={speedCartGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={speedcartLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={oesteopathe}
                    alt="oesteopathe"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Responsive </span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      oesteopathe Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={oesteopatheGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={oesteopatheLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={seatrans}
                    alt="seatrans"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      seatrans Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={seaTransGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={seatransLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={solution}
                    alt="solution"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      solution Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={solutionGihub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={solutionLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={techno}
                    alt="techno"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      techno Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={technoGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={technoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">React JS</span>
                  <img className="img img-fluid project-image "

                    src={bizkar}
                    alt="Bizkar"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 text-center">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className=" m-auto">
                    <h6 className="text-uppercase">
                      Bizkar Website
                    </h6>
                  </div>
                  <a
                    className="btn btn-primary mx-2 px-3"
                    href={bizkarGithub}
                    target="_blank"

                    rel="noreferrer"

                  >
                    View Code
                  </a>
                  <a
                    className="btn btn-success px-3 m-1"
                    href={bizkarLiveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5      ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">Mern Stack</span>
                  <img className="img img-fluid project-image"

                    src={confortZone}
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
            <div className="col-md-4 mb-5   ">
              <div className="card rounded">
                <div className="card-image img-fluid project-image">
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
            <div className="col-md-4 mb-5">
              <div className="card rounded">
                <div className="card-image img-fluid project-image">
                  <span className="badge   position-absolute top-0 start-50 p-2 translate-middle  border border-danger rounded-pill cursor-pointer bg-warning text-dark">LinkedIn</span>
                  <img
                    height={"210px"}
                    width={"100%"}
                    src={linkedin} alt="LinkedIn"
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
