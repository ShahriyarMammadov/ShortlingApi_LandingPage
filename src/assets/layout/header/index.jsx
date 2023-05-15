import React, { useState } from "react";
import logo from "../images/Shortly.svg";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import "./index.scss";

const HeaderComp = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Shortly" />
        <div className="navigation">
          <NavLink to={"/features"}>Features</NavLink>
          <NavLink to={"/pricing"}>Pricing</NavLink>
          <NavLink to={"/resources"}>Resources</NavLink>
        </div>
      </div>

      {Toggle && (
        <div className="site-card-border-less-wrapper">
          <Card
            title={
              <>
                Features <br />
                Pricing <br />
                Resources
              </>
            }
            bordered={false}
            style={{ width: 250, backgroundColor: "#3A3054" }}
          >
            <p>Login</p>
            <button>Sign UP</button>
          </Card>
        </div>
      )}

      <div className="headerRight">
        <div className="menuIcon">
          <span>
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                setToggle(!Toggle);
              }}
            ></i>
          </span>
        </div>
        <NavLink to={"/login"}>Login</NavLink>
        <button>
          <NavLink to={"/signUp"}>Sign Up</NavLink>
        </button>
      </div>
    </header>
  );
};

export default HeaderComp;
