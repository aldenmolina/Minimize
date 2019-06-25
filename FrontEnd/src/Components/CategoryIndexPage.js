import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./CategoryIndexPage.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faTruckMonster,
  faCouch,
  faLaptop,
  faQuestion,
  faTools
} from "@fortawesome/free-solid-svg-icons";
library.add(faTshirt, faTruckMonster, faCouch, faLaptop, faQuestion, faTools);

export default props => {
  const categoryLinks = props.categories.map(item => (
    <Link to={`/category/${item.categoryId}`}>
      <FontAwesomeIcon icon={item.categoryImg} />
      <p id="CatName">{item.categoryName}</p>
    </Link>
  ));
  return (
    <div className="CatIndexBody">
      <h1 id="MiniTitle">Choose a category</h1>
      <ul id="CatIndexUl">
        <div id="CatLists">{categoryLinks}</div>
      </ul>
    </div>
  );
};
