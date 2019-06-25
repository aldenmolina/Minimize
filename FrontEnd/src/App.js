import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryIndex from "./Components/CategoryIndexPageContainer";
import CatDetailsPage from "./Components/CategoryDetailsPage";
import ProfilePage from "./Components/ProfilePage";
import ResourcePage from "./Components/ResourcePage";
import GoalsPageContainer from "./Components/GoalsPageContainer";

import BadgeIndexPageContainer from "./Components/BadgeIndexPageContainer";
import Landing from "./Components/BeginningPage/Landing";
import FirstPage from "./Components/BeginningPage/FirstPage";
import "./App.css";
import Header from "./Components/Header";

class AppRouter extends Component {
  render() {   
    return (      
      <Router>
       <Route path="/" component={Header} />
        <div>
          <Route path="/" exact component={FirstPage} />
          <Route path="/landing" component={Landing} />
          <Route path="/categoryIndex" component={CategoryIndex} />
          <Route path="/category/:categoryId" component={CatDetailsPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/goals" component={GoalsPageContainer} />
          <Route path="/badges" component={BadgeIndexPageContainer} />
          <Route path="/resourcepage" component={ResourcePage} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
