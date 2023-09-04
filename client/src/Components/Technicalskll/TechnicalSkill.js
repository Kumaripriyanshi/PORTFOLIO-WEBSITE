import React from "react";
import Zoom from "react-reveal/Zoom";
import "./TechnicalSkill.css";
import { Carousel, Progress } from "antd";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoJava,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { useToggle } from "../Context/NavToggleContext";

import Roll from "react-reveal/Roll";

const TechnicalSkill = () => {
  const [toggle, setToggle] = useToggle();

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="techicalSkill pt-5" id="techskill">
      <div
        className={toggle ? "tog margin-pr pt-5" : "margin-pr margin-p  pt-5 "}
      >
        <Roll top>
          <div className="heading mb-5">TECHNICAL SKILLS</div>
        </Roll>

        <div className="parent-progress-div d-flex flex-column">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-2">
              <p className="text-center">HTML</p>
            </div>
            <div className="col-md-11 col-lg-6  col-sm-10">
              <Zoom>
                <Progress percent={90} showInfo={false} strokeColor="pink" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">CSS</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress showInfo={false} strokeColor="red" percent={88} />
              </Zoom>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">JAVASCRIPT</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={85} showInfo={false} strokeColor="yellow" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">REACT JS</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={97} showInfo={false} strokeColor="grey" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">NODE JS</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={85} showInfo={false} strokeColor="green" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">MONGO DB</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={75} showInfo={false} strokeColor="black" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">MY SQL</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={95} showInfo={false} strokeColor="aqua" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">DSA</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={89} showInfo={false} strokeColor="magenta" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">GIT</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={70} showInfo={false} strokeColor="blue" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">JAVA</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={94} showInfo={false} strokeColor="orange" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">C++</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={60} showInfo={false} strokeColor="brown" />
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-1 col-lg-2 col-sm-4">
              <p className="text-center">PYTHON</p>
            </div>
            <div className="col-md-11 col-lg-6 col-sm-8">
              <Zoom>
                <Progress percent={70} showInfo={false} strokeColor="" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkill;

// <div>
//               <AiOutlineHtml5 size={25} /> HTML
//             </div>
//             <div>
//               <BiLogoCss3 size={25} /> CSS
//             </div>
//             <div>
//               <BiLogoJavascript size={25} /> JAVASCRIPT
//             </div>
//             <div>
//               <BiLogoReact size={25} /> REACT JS
//             </div>
//             <div>
//               <BiLogoMongodb size={25} /> MONGO DB
//             </div>
//             <div>
//               <BiLogoJava size={25} /> JAVA
//             </div>
//             <div>
//               <DiMysql size={25} /> MySql
//             </div>
