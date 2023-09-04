import React, { useState, useEffect } from "react";
import "./Layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcAbout, FcVideoProjector, FcHome, FcContacts } from "react-icons/fc";
import { MdSchool, MdOutlineComputer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useToggle } from "../Context/NavToggleContext";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import me from "../assets/me.jfif";
import Zoom from "react-reveal/Zoom";

const Layout = () => {
  const [toggle, setToggle] = useToggle();
  const handleToggle = () => {
    setToggle((prev) => (prev = !prev));
    console.log(toggle);
    
  };

  useEffect(() => {
    try {
      const togle_nav = document.getElementsByClassName("toggle-nav")[0];
      if (togle_nav.style.height < "8%" && window.screen.width < 1441) {
        document.getElementsByClassName("menus-div")[0].style.display = "none";
      } else {
        document.getElementsByClassName("menus-div")[0].style.display = "block";
      }
    } catch {
      console.log("error.................");
    }
  }, [toggle]);

  return (
    <>
      {!toggle ? (
        <div className="layout-nav temp " id="temp">
          <div className="open-close-btn mx-2 my-1 mb-5">
            <GiHamburgerMenu fill="white" size={30} onClick={handleToggle} />
          </div>

          <div className="image-div mb-5">
            <Zoom>
              <img src={me} alt="Candidate Picture" />
            </Zoom>
          </div>
          <div className="menus-div">
            <ul>
              <li>
                <Zoom top>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome size={30} />
                    HOME
                  </Link>
                </Zoom>
              </li>
              <li>
                <Zoom bottom>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout fill="white" size={30} />
                    ABOUT ME
                  </Link>
                </Zoom>
              </li>
              <li>
                <Zoom bottom>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdSchool fill="red" size={30} />
                    EDUCATION
                  </Link>
                </Zoom>
              </li>
              <li>
                <Zoom left>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="techskill"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdOutlineComputer fill="blue" size={30} />
                    TECHNICAL SKILLS
                  </Link>
                </Zoom>
              </li>
              <li>
                <Zoom right>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector fill="white" size={30} />
                    PROJECTS
                  </Link>
                </Zoom>
              </li>
              <li>
                <Zoom clear>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts size={30} />
                    CONTACT ME
                  </Link>
                </Zoom>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="layout-nav toggle-nav " id="temp">
          <div className="open-close-btn toogle-menu-btn">
            <RxHamburgerMenu
              fill="white"
              color="white"
              size={30}
              onClick={handleToggle}
            />
          </div>

          <div className="menus-div">
            <ul>
              <li>
                <Link className="link" to="home">
                  <FcHome color="black" size={30} />
                </Link>
              </li>
              <li>
                <Link className="link" to="aboutme">
                  <FcAbout color="black" size={30} />
                </Link>
              </li>
              <li>
                <Link className="link" to="education">
                  <MdSchool color="red" size={30} />
                </Link>
              </li>
              <li>
                <Link className="link" to="techskill">
                  <MdOutlineComputer color="blue" size={30} />
                </Link>
              </li>

              <li>
                <Link className="link" to="project">
                  <FcVideoProjector fill="white" size={30} />
                </Link>
              </li>

              <li>
                <Link className="link" to="contact">
                  <FcContacts size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
