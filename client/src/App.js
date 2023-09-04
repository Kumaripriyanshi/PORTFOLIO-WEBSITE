import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import HomePage from "./Components/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";
import Test from "./Components/Test";

import Project from "./Components/Projects/Project";
import TechnicalSkill from "./Components/Technicalskll/TechnicalSkill";
import ScrollToTop from "react-scroll-to-top";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Layout />
      <div>
        <HomePage />
        <div className="pr">
          <About />
        <Education />
        <TechnicalSkill />
        <Project />
          {/* <Test /> */}
          <Contact />
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
