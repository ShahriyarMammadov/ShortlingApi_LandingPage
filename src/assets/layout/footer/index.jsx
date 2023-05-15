import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import logoImg from "./images/Shortly.svg";

const FooterComp = () => {
  return (
    <>
      <footer>
        <div className="leftImg"></div>
        <div className="centerImg"></div>
        <div className="rightImg"></div>

        <div className="textCenter">
          <h1>Boost your links today</h1>
        </div>
        <div className="button">
          <button>
            <NavLink to={"/signUp"}>Get Started</NavLink>
          </button>
        </div>
      </footer>
      <div className="footerBottom">
        <div id="logo">
          <img src={logoImg} alt="" />
        </div>
        <div className="navigationLeft">
          <p>Features</p>
          <NavLink to={"/5456dsf"}>Link Shortening</NavLink>
          <NavLink to={"/5456dsf"}>Branded Links</NavLink>
          <NavLink to={"/5456dsf"}>Analytics</NavLink>
        </div>
        <div className="navigationCenter">
          <p>Resources</p>
          <NavLink to={"/5456dsf"}>Blog</NavLink>
          <NavLink to={"/5456dsf"}>Developers</NavLink>
          <NavLink to={"/5456dsf"}>Support</NavLink>
        </div>
        <div className="navigationRight">
          <p>Company</p>
          <NavLink to={"/5456dsf"}>About</NavLink>
          <NavLink to={"/5456dsf"}>Our Team</NavLink>
          <NavLink to={"/5456dsf"}>Careers</NavLink>
          <NavLink to={"/5456dsf"}>Contact</NavLink>
        </div>
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100008752201523"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://twitter.com/2002Shehriyar" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shahriyarmammadov/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/sehriyar_1234/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterComp;
