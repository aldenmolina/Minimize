import React, { Component } from "react";
import "./Posts.css";

class Post extends Component {
  removePost = postId => {
    this.props.deletePost(postId);
  };

  render() {
    const {
      postId,
      postTime,
      totalItems,
      removedItems,
      postDescription,
      postImgPath
    } = this.props.post;

    var moment = require("moment");
    return (
      <div id="postBody">
        <div className="postEntire">
          <div className="postItems">
            <p>{moment(postTime).format("L")}</p>
            {/* <p>Total Items: {totalItems}</p> */}
            <p>Removed Items: {removedItems}</p>
            <p>Description: {postDescription}</p>
          </div>
          <div className="postImg">
            <img src={postImgPath} alt="UserPhoto" />
          </div>
          <div className="button">
            <button onClick={() => this.removePost(postId)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
