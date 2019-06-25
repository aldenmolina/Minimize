import React, { Component } from "react";
import Post from "./Post";
import CreatePost from "./Library/CreatePost";
import "./Category.css";
import Tracker from "./Tracker";

class Category extends Component {
  render() {
    const {
      categoryId,
      categoryName,
      categoryDescription,
      posts,
      onSuccess,
      onError,
      formModal,
      closeModal,
      deletePost,
      tracker
    } = this.props;

    const listOfPosts = posts.map(post => (
      <Post key={post.postId} post={post} deletePost={deletePost} />
    ));

    return (
      <div id="detailContainer">
        <div className="detailBody">
          <div className="detailName">
            <h2>{categoryName}</h2>
          </div>
          <div className="tracker">
          <Tracker {...tracker} />
          </div>
          <p id="catDescrip">{categoryDescription}</p>
          <button onClick={formModal}>Create Post</button>
        </div>
        <div className="create-post">
          <CreatePost
            categoryId={categoryId}
            postImgPath={this.props.postImgPath}
            addPost={this.props.addPost}
            onSuccess={onSuccess}
            onError={onError}
            closeModal={closeModal}
          />
        </div>
        <div className="postBody">
          <ul>{listOfPosts}</ul>
        </div>
      </div>
    );
  }
}

export default Category;
