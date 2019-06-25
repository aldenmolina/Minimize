import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './SideNav.css';

const sideNav = props => {
  let sideNavClasses = 'side-nav';
  if (props.show) {
    sideNavClasses = 'side-nav open';
  }
  return (
  <nav className={sideNavClasses}>
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
        <Link to={'/profile'} className="link">
          PROFILE
        </Link>
      </li>
      <li>
        <Link to={'/ResourcePage'} className="link">
          RESOURCES
        </Link>
      </li>
    </ul>
  </nav>
  );
};

export default sideNav;
