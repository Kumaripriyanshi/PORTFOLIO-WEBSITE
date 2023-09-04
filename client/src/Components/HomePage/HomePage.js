import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./HomePage.css";
import { useToggle } from "../Context/NavToggleContext";
import Resume from "../assets/resume.pdf";
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
const HomePage = () => {
  const [toggle, setToggle] = useToggle();

  // useEffect(() => {
  //   if (!toggle) {
  //     document.getElementsByClassName("home-div")[0].style.marginLeft = "277px";
  //     document.getElementsByClassName("home-div")[0].style.transition = "1s";

  //   }else{
  //     document.getElementsByClassName("home-div")[0].style.marginLeft = "125px";
  //     document.getElementsByClassName("home-div")[0].style.transition = "0.6s";

  //   }
  // }, [toggle]);

  return (
    <div className="home-div" id="home">
      <div className="margin-p responsive-class">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4">
            <Rotate>
             
            <h1 >Hello 🖐️ I am a </h1>

            </Rotate>
            {/* <Bounce top>

            <h2 className="mb-5">I am a </h2>
            </Bounce> */}
            <Typewriter
            className="typewriter"
              options={{
                strings: ["Full Stack Developer", "Programmer", "FreeLancer"],
                autoStart: true,
                loop: true,
                
              }}
            />
          </div>
          <div className="col-lg-8 d-flex ">
            <a
              className="btn  btn-hire "
              href="https://api.whatsapp.com/send?phone=1234567890"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className="btn btn-info btn-cv"
              href={Resume}
              download="your_name.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
