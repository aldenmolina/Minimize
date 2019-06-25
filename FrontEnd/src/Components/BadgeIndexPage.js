import React from "react";
import "./BadgeIndex.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
library.add(faMedal);

export default props => {
  const listOfBadges = props.badges.map(item => (
    <div id="badgeContainer">
      <FontAwesomeIcon icon="medal" className="medal" />
      <div className="badge-info">
        <h5>{item.badgeName}</h5>
        <p>{item.badgeDescription}</p>
      </div>
    </div>
  ));
  return <div id="badgeList">{listOfBadges}</div>;
};
