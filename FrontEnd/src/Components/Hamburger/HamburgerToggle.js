import React from 'react';
import "./HamburgerToggle.css";

const hamburgerToggle = props => (
  <button className="toggle_button" onClick={props.click}>
    <div className="toggle_line"/>
    <div className="toggle_line"/>
    <div className="toggle_line"/>
  </button>  
);

export default hamburgerToggle;