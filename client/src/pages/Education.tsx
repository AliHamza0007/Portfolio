import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education:React.FC = () => {
    const gray={
    backgroundColor:'rgb(179, 173, 173)',
      
        
    }
  return (
    <>
      <div className="container py-5  mb-2 h-100" style={gray}>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="h2 text-center">BSCS</h3>
            <h4 className="h4">
              UNIVERSITY OF Education, IN
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="h2 text-center">ICS</h3>
            <h4 className="h4">
              GOVT POSTGRADUATE COLLEGE OKARA, IN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
