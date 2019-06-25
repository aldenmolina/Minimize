import React, { Component } from "react";
import { GetAllBadges } from "./Library/HelperFunctions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faAlignCenter } from "@fortawesome/free-solid-svg-icons";
library.add(faMedal);

class BadgeReward extends Component {
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
    const {
      totalPosts,
      stateTotal,
      itemsCount,
      clothingCount,
      furnitureCount,
      electronicsCount,
      toolsCount,
      toysCount,
      miscCount
    } = this.props;

    const reward = this.state.badges.map(item => {
      const rewardsHtml = (
        <div id="badgeContainer">
          <FontAwesomeIcon icon="medal" className="medal" />
          <div className="badge-info">
            <h5>{item.badgeName}</h5>
            <p>{item.badgeDescription}</p>
          </div>
        </div>
      );
      if (item.badgeId === 1) {
        return rewardsHtml;
      } else if (item.badgeId === 2 && itemsCount > 0) {
        return rewardsHtml;
      } else if (clothingCount >= 1 && item.badgeId === 3) {
        return rewardsHtml;
      } else if (furnitureCount >= 1 && item.badgeId === 4) {
        return rewardsHtml;
      } else if (toolsCount >= 1 && item.badgeId === 5) {
        return rewardsHtml;
      } else if (electronicsCount >= 1 && item.badgeId === 6) {
        return rewardsHtml;
      } else if (toysCount >= 1 && item.badgeId === 7) {
        return rewardsHtml;
      } else if (miscCount >= 1 && item.badgeId === 8) {
        return rewardsHtml;
      } else if (
        clothingCount >= 1 &&
        furnitureCount >= 1 &&
        toolsCount >= 1 &&
        electronicsCount >= 1 &&
        toysCount >= 1 &&
        miscCount >= 1 &&
        item.badgeId == 9
      ) {
        return rewardsHtml;
      } else if (stateTotal > totalPosts && item.badgeId === 10) {
        return rewardsHtml;
      } else if (itemsCount >= 5 && item.badgeId === 11) {
        return rewardsHtml;
      } else if (itemsCount >= 10 && item.badgeId == 12) {
        return rewardsHtml;
      } else if (itemsCount >= 20 && item.badgeId === 13) {
        return rewardsHtml;
      } else if (itemsCount >= 35 && item.badgeId === 14) {
        return rewardsHtml;
      } else if (itemsCount >= 50 && item.badgeId === 15) {
        return rewardsHtml;
      } else if (itemsCount >= 1000 && item.badgeId === 16) {
        return rewardsHtml;
      } else if (itemsCount >= 100000 && item.badgeId === 17) {
        return rewardsHtml;
      } else if (itemsCount >= 1000000 && item.badgeId === 18) {
        return rewardsHtml;
      } else {
        console.log("nope");
      }
    });
    return <div id="badgeList">{reward}</div>;
  }
}

export default BadgeReward;
