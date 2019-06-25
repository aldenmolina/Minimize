import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import SideNav from "./Hamburger/SideNav";
import Backdrop from "./Backdrop/Backdrop";

class Header extends Component {
  state = {
    sideNavOpen: false
  };

  hamburgerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideNavOpen: !prevState.sideNavOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideNavOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideNavOpen) {
      backdrop = <Backdrop click={this.hamburgerToggleClickHandler} />;
    }
    const showHeader = this.props.location.pathname != "/";
    if (!showHeader) return <></>;
    // console.log(this.props.location.pathname )
    return (
      <div style={{ height: "100%" }}>
        <NavBar hamburgerClickHandler={this.hamburgerToggleClickHandler} />
        <SideNav show={this.state.sideNavOpen} />
        {backdrop}
      </div>
    );
  }
}
export default Header;
