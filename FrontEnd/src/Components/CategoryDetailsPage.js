import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import Category from "./Category";
import "./CategoryDetailsPage.css";

class CatDetails extends Component {
  constructor() {
    super();
    this.state = {
      category: { posts: [{}] },
      totalItems: 0,
      removedItems: 0,
      postDescription: "",
      postImgPath: "",
      tracker: {}
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://localhost:44387/api/category/${params.categoryId}`)
      .then(res => res.json())
      .then(json => this.setState({ category: json }));
    this.trackGoal(params.categoryId);
  }
  trackGoal = categoryId => {
    fetch(`https://localhost:44387/api/tracker/${categoryId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ tracker: data });
      });
  };
  addPost = post => {
    fetch("https://localhost:44387/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    }).then(res => {
      if (res.ok) {
        const currentPosts = [...this.state.category.posts, post];
        const withNewPost = Object.assign({}, this.state.category, {
          posts: currentPosts
        });
        this.setState({ category: withNewPost });
      }
    });
  };
  deletePost = postId => {
    fetch(`https://localhost:44387/api/post/${postId}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          const currentPosts = this.state.category.posts;
          const updatedPosts = currentPosts.filter(
            item => item.postId !== postId
          );
          const updatedCategory = Object.assign({}, this.state.category, {
            posts: updatedPosts
          });
          this.setState({ category: updatedCategory });
          this.trackGoal(this.props.match.params.categoryId);
        }
      })
      .catch(console.error);
  };

  onSuccess = result => {
    this.setState({
      postImgPath: result.filesUploaded[0].url
    });
  };

  onError = error => {
    console.error("error", error);
  };

  formModal = () => {
    document.querySelector(".create-post").classList.add("form-active");
  };

  closeModal = () => {
    document.querySelector(".create-post").classList.remove("form-active");
  };

  render() {
    return (
      <Category
        categoryId={this.props.match.params.categoryId}
        categoryName={this.state.category.categoryName}
        categoryDescription={this.state.category.categoryDescription}
        posts={this.state.category.posts}
        postTime={this.state.postTime}
        postImgPath={this.state.postImgPath}
        addPost={this.addPost}
        deletePost={this.deletePost}
        editPost={this.updatePost}
        onSuccess={this.onSuccess}
        onError={this.onError}
        formModal={this.formModal}
        closeModal={this.closeModal}
        tracker={this.state.tracker}
      />
    );
  }
}

export default CatDetails;
