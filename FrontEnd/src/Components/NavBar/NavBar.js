import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HamburgerToggle from "../Hamburger/HamburgerToggle";
import "./NavBar.css";

const navbar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="hamburger">
        <HamburgerToggle click={props.hamburgerClickHandler} />
      </div>
      <div className="logo">
        <Link to={`/categoryIndex`}>
          <img src="/Images/Logo3.png" alt="logo" />
        </Link>
      </div>
      <div className="spacer" />
      <div className="navbar_items">
        <ul>
          <li>
            <Link to={`/goals`} className="link">
              GOALS
            </Link>
          </li>
          <li>
            <Link to={`/badges`} className="link">
              BADGES
            </Link>
          </li>
          <li>
            <Link to={"/profile"} className="link">
              PROFILE
            </Link>
          </li>
          <li>
            <Link to={"/ResourcePage"} className="link">
              RESOURCES
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
