import React, { Component } from "react";
import Post from "./Post";
import Chart from "./Chart";
import "./ProfilePage.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import BadgeFunctions from "./BadgeFunctions";
import ProfilePostContainer from "./ProfilePostContainer";
library.add(faMedal);

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      chartData: {}
    };
  }

  componentDidMount() {
    const labels = [];
    const removedItems = [];
    fetch(`https://localhost:44387/api/category`)
      .then(res => res.json())
      .then(data => {
        data.map(cat => {
          const total = cat.posts.reduce(
            (accumulated, currentPost) =>
              accumulated + currentPost.removedItems,
            0
          );
          removedItems.push(total);
          labels.push(cat.categoryName);
          return { name: cat.categoryName, count: total };
        });
        this.setState({
          chartData: {
            labels: labels,
            datasets: [
              {
                data: removedItems,
                backgroundColor: [
                  "rgb(0, 63, 158)",
                  "rgb(111, 0, 159)",
                  "rgb(214, 0, 65)",
                  "rgb(229, 238, 0)",
                  "rgb(240, 151, 0)",
                  "rgb(97, 213, 0)"
                ]
              }
            ]
          }
        });
      });
  }
  render() {
    const listOfPosts = this.state.posts.map(post => (
      <Post key={post.postId} post={post} />
    ));
    return (
      <div id="ProfileBody">
        <div className="ProgressSection">
          <h2>Progress</h2>
          <Chart chartData={this.state.chartData} />
        </div>
        <div className="BadgesSection" />
        <h2>Badges Earned</h2>
        <BadgeFunctions />
        <div className="PostSection">
          <h2>Submitted Posts</h2>
          <ProfilePostContainer />
        </div>
        <ul id="PostList">{listOfPosts}</ul>
      </div>
    );
  }
}

export default ProfilePage;
