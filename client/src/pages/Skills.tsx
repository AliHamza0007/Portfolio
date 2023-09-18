import React from "react";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { SkillsList } from "../utils/SkillsList";
import './skills.css'
const Skills = () => {

    interface mapType{_id:number,name:string,icon?:any};

  return (
    <>
      <div className="container my-5 py-5 h-100 techstack" >
        <RubberBand>
          <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">
            Skills
          </h2>
          <hr />
          
        </RubberBand>
        <div className="row py-5 mt-3">
          {
          SkillsList.map((tech:mapType) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
