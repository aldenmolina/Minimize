import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./FirstPage.css";
// import Header from "../Header";
class FirstPage extends Component {
  render() {
    return (
      <div id="entirePage">
        <div className="enter-site">
          <img src="/Images/Logo3.png" alt="logo" />
          <div className="buttons">
            <div className="logIn">
              <Link to={`/categoryIndex`} className="logIn">
                {" "}
                <button>Log In</button>
              </Link>
            </div>
            <div className="create">
              <Link to={`/Landing`} className="CreateAccount">
                {" "}
                <button>Create Account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
