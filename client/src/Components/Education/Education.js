import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { MdSchool } from "react-icons/md";
import Bounce from "react-reveal/Bounce";

import { useToggle } from "../Context/NavToggleContext";

const Education = () => {
  const [toggle, setToggle] = useToggle();
  return (
    <div className=" education-section pt-5" id="education">
      <div className={toggle ? "tog" : "margin-p"}>
        <Bounce top>
          <div className="heading text-center pt-5 mb-5">EDUCATION DETAILS</div>
        </Bounce>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                "linear-gradient(to right, rgb(31 3 3), rgb(34 72 84))",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgb(58 91 118)" }}
            date="2020 - 2024"
            iconStyle={{ background: "rgb(58 91 118)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Chandigarh University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              pursuing BE/CSE(2020 - 2024)
            </h4>
            <p>
              A Computer Science Student going to graduate in the year 2024 ,
              Current aggregate score is 7.36
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018-2020"
            contentStyle={{
              background:
                "linear-gradient(189deg, rgba(2,0,36,1) 0%, rgba(8,82,130,1) 47%, rgba(0,212,255,1) 100%)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(8,82,130,1)" }}
            iconStyle={{ background: "rgba(8,82,130,1)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              BNS DAV Public School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              PCM(2018-2020)
            </h4>
            <p>Science stream passout of batch(2020) , secured 90.05%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            contentStyle={{
              background:
                "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(37,110,10,1) 26%, rgba(0,212,255,1) 100%)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0,212,255,1)" }}
            iconStyle={{ background: "rgba(2,0,36,1)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Honey Holy Trinity School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              passout of batch 2018
            </h4>
            <p>Secured 90.17%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
