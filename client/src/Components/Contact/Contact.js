import React, { useState } from "react";
import "./Contact.css";
import contact from "../assets/contact.jpg";
import { useToggle } from "../Context/NavToggleContext";
import Jello from "react-reveal/Jello";
import HeadShake from "react-reveal/HeadShake";

export const Contact = () => {
  const [toggle, setToggle] = useToggle();
  const [credentials, setCrediantials] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    console.log(credentials.name, credentials.email);
    if (window.Email) {
      window.Email.send({
        Host: "ssmtp.elasticemail.com",
        Username: "kumarmalliksanjay81@gmail.com",
        Password: "DF768C27DEBF3A27DDDEF4CBD3EA096D0CE8",
        To: "kumarmalliksanjay81@gmail.com",
        From: `kpriyanshi188@gmail.com`,
        Subject: `${credentials.name}`,
        Body: `${credentials.message}`,
      }).then((message) => alert(message));
    }
  };

  const handleChange = (e) => {
    setCrediantials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-div pt-5" id="contact">
      <div className={toggle ? "tog" : "margin-p"}>
        <Jello>
          <h1 className="heading mb-5">CONTACT ME</h1>
        </Jello>
        <HeadShake>
          <div className="row">
            <div className="col-md-5 col-lg-5 contact-me ">
              <img src={contact} alt="Contact me png" />
            </div>
            <div className="col-md-7 col-lg-7 col-sm-12 d-flex flex-column justify-content-between form-inputs">
              <input
                type="text"
                value={credentials.name}
                onChange={handleChange}
                name="name"
                placeholder="Enter your Name"
              />
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your Email"
              />
              <textarea
                name="message"
                value={credentials.message}
                onChange={handleChange}
                placeholder="Enter the description "
              />
              <button className="send-btn" onClick={handleClick}>
                SEND
              </button>
            </div>
          </div>
        </HeadShake>
      </div>
    </div>
  );
};
