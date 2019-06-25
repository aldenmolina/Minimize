import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import "./CreatePost.css";

export default class CreatePost extends Component {
  onAddPost = () => {
    const post = {
      totalItems: this.totalItems.value,
      removedItems: this.removedItems.value,
      postDescription: this.postDescription.value,
      postImgPath: this.props.postImgPath,
      categoryId: this.props.categoryId
    };
    this.props.addPost(post);
    this.postForm.reset();
  };

  render() {
    const basicOptions = {
      accept: "image/*",
      fromSources: ["local_file_system"],
      maxSize: 1024 * 1024,
      maxFiles: 1
    };
    const key = "A3wux2cFHQHGgvyu7UcKVz";
    return (
      <form
        id="form-container"
        ref={input => (this.postForm = input)}
        onSubmit={e => this.onAddPost(e)}
      >
        <div className="post-form">
          {/* <h1>{this.props.postImgPath}</h1> */}
          <input
            type="text"
            placeholder="totalItems "
            ref={input => (this.totalItems = input)}
          />
          <input
            type="text"
            placeholder="removedItems "
            ref={input => (this.removedItems = input)}
          />
          <textarea
            type="text"
            placeholder="postDescription "
            ref={input => (this.postDescription = input)}
          />

          <ReactFilestack
            apikey={key}
            options={basicOptions}
            onSuccess={this.props.onSuccess}
            onError={this.props.onError}
          />
          <div>
            <button type="submit" onClick={() => this.onAddPost()}>
              Add Post
            </button>
            <button onClick={this.props.closeModal}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}
