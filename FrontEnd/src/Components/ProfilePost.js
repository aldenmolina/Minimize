import React from "react";
import "./ProfilePost.css";

export default props => {
  const profilePosts = props.posts.map(post => (
    <div id="postBody">
      <div className="postEntire">
        <div className="postItems">
          <p>Time: {post.postTime}</p>
          <p>Total Items: {post.totalItems}</p>
          <p>Removed Items: {post.removedItems}</p>
          <p>Description: {post.postDescription}</p>
        </div>
        <div className="postImg">
          <img
            src={post.postImgPath}
            alt="UserPhoto"
            height={190}
            width={190}
          />
        </div>
      </div>
    </div>
  ));
  return <div>{profilePosts}</div>;
};
