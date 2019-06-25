import React, { Component } from "react";
import { GetAllPosts } from "./Library/HelperFunctions";
import ProfilePost from "./ProfilePost";

class ProfilePostContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    GetAllPosts().then(json => this.setState({ posts: json }));
  }
  render() {
    console.log(this.state.posts);
    return <ProfilePost posts={this.state.posts} />;
  }
}

export default ProfilePostContainer;
