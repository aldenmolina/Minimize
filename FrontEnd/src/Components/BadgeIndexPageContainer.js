import React, { Component } from "react";
import { GetAllBadges } from "./Library/HelperFunctions";
import BadgeIndexPage from "./BadgeIndexPage";

class BadgeIndexPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      badges: []
    };
  }

  componentDidMount() {
    GetAllBadges().then(json => this.setState({ badges: json }));
  }

  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <div style={style}>
        <h1>Badges</h1>
        <BadgeIndexPage badges={this.state.badges} />
      </div>
    );
  }
}

export default BadgeIndexPageContainer;
