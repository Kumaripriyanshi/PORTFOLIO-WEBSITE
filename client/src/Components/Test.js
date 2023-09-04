import React from "react";
import { Carousel } from "antd";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoJava,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
const Test = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay
    dotPosition="top"
    >
      <div style={contentStyle}>
        <AiOutlineHtml5 size={25} /> HTML
      </div>
      <div style={contentStyle}>
        <BiLogoCss3 size={25} /> CSS
      </div>
      <div style={contentStyle}>
        <BiLogoJavascript size={25} /> JAVASCRIPT
      </div>
      <div style={contentStyle}>
        <BiLogoReact size={25} /> REACT JS
      </div>
      <div style={contentStyle}>
        <BiLogoMongodb size={25} /> MONGO DB
      </div>
      <div style={contentStyle}>
        <BiLogoJava size={25} /> JAVA
      </div>
      <div style={contentStyle}>
        <DiMysql size={25} /> MySql
      </div>
    </Carousel>
  );
};

export default Test;
