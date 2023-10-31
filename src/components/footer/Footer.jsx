import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import fb from "../../assets/shared/desktop/icon-facebook.svg";
import twit from "../../assets/shared/desktop/icon-twitter.svg";
import insta from "../../assets/shared/desktop/icon-instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <span>
          <img src={logo} />
        </span>
        <div className="links1">
          <NavLink className="link1" to="home">
            Home
          </NavLink>
          <NavLink className="link1" to="headphones">
            headphones
          </NavLink>
          <NavLink className="link1" to="speakers">
            speakers
          </NavLink>
          <NavLink className="link1" to="earphones">
            earphones
          </NavLink>
        </div>
      </div>
      <p className="descr">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="bottom">
        <p className="copyr">Copyright 2021. All Rights Reserved</p>
        <div className="icons">
          <span>
            <img src={fb} alt="icon" className="icon" />
          </span>
          <span>
            <img src={twit} alt="icon" className="icon" />
          </span>
          <span>
            <img src={insta} alt="icon" className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
