import React, { useState } from "react";
import "./Project.css";
import mempuz from "../assets/mempuz.png";
import bgweb from "../assets/bgweb.png";
import { Card } from "antd";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";
const { Meta } = Card;

const Project = () => {
  const [flipfirstCard, setFlipFirstCard] = useState(false);
  const [flipsecondCard, setFlipSecondCard] = useState(false);

  return (
    <div className="project-section" id="project">
      <div className="margin-p d-flex align-items-center flex-column">
        <Spin>
          <div className="heading m-5"> MY PROJECTS</div>
        </Spin>

        <div className="project-cards d-flex flex-wrap justify-content-evenly">
          <RubberBand>
            <ReactCardFlip isFlipped={flipfirstCard} className="pb-5">
              <div
                className="card"
                style={{ width: "18rem", height: "26rem" }}
                onMouseEnter={(e) => setFlipFirstCard((prev) => (prev = !prev))}
                // onMouseLeave={(e) => setFlip((prev) => (prev = !prev))}flip
              >
                <img src={mempuz} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title pt-3 pb-2 text-center">
                    MEMORY PUZZLE GAME
                  </h5>
                  <p className="card-text text-justify">
                    User can Play or solve the puzzles User can Play or solve
                    the puzzles User can Play or solve the puzzles User can Play
                    or solve the puzzles
                  </p>
                </div>
              </div>

              <div
                // onMouseEnter={(e) => setFlip((prev) => (prev = !prev))}
                onMouseLeave={(e) => setFlipFirstCard((prev) => (prev = !prev))}
                className="card"
                style={{
                  width: "18rem",
                  height: "26rem",
                
                  backgroundColor: "#17030324",
                  background:
                    "linear-gradient(189deg, rgba(2,0,36,1) 0%, rgba(8,82,130,1) 47%, rgba(0,212,255,1) 100%)",
                }}
              >
                {/* <img src={mempuz} class="card-img-top" alt="..." /> */}
                <div className="card-body d-flex flex-column justify-content-around">
                  <div className="tech-span mx-auto">
                    <span>HTML</span>
                    <span>HTML</span>
                    <span>HTML</span>
                    <span>HTML</span>
                  </div>

                  <button className="open-prj-btn mx-auto">
                    <Link to="https://source.unsplash.com/" target="_blank">
                      OPEN PROJECT
                    </Link>
                  </button>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flipsecondCard}>
              <div
                className="card"
                style={{ width: "18rem", height: "26rem" }}
                onMouseEnter={(e) =>
                  setFlipSecondCard((prev) => (prev = !prev))
                }
                // onMouseLeave={(e) => setFlip((prev) => (prev = !prev))}
              >
                <img src={bgweb} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">BLOGGING WEBSITE</h5>
                  <p className="card-text text-center">
                    User can Play or solve the puzzles User can Play or solve
                    the puzzles User can Play or solve the puzzles User can Play
                    or solve the puzzles
                  </p>
                </div>
              </div>

              <div
                // onMouseEnter={(e) => setFlip((prev) => (prev = !prev))}
                onMouseLeave={(e) =>
                  setFlipSecondCard((prev) => (prev = !prev))
                }
                className="card"
                style={{
                  width: "18rem",
                  height: "26rem",
                  backgroundColor: "#17030324",
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(37,110,10,1) 26%, rgba(0,212,255,1) 100%)",
                }}
              >
                {/* <img src={mempuz} class="card-img-top" alt="..." /> */}
                <div className="card-body d-flex flex-column justify-content-around">
                  <div className="tech-span mx-auto">
                    <span>HTML</span>
                    <span>HTML</span>
                    <span>HTML</span>
                    <span>HTML</span>
                  </div>

                  <button className="open-prj-btn mx-auto">
                    <Link to="https://source.unsplash.com/" target="_blank">
                      OPEN PROJECT
                    </Link>
                  </button>
                </div>
              </div>
            </ReactCardFlip>
          </RubberBand>
        </div>
      </div>
    </div>
  );
};

export default Project;
