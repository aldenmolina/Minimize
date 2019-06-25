import React, { Component } from "react";
import { GetAllPosts } from "./Library/HelperFunctions";
import BadgeReward from "./BadgeReward";

class BadgeFunctions extends Component {
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
    const totalPosts = this.state.posts.length;

    // Get Total Items Removed
    let itemsCount = 0;
    let clothingCount = 0;
    let furnitureCount = 0;
    let toolsCount = 0;
    let electronicsCount = 0;
    let toysCount = 0;
    let miscCount = 0;

    this.state.posts.forEach(item => {
      itemsCount += item.removedItems;

      if (item.categoryId === 1) {
        clothingCount += item.removedItems;
      } else if (item.categoryId === 2) {
        furnitureCount += item.removedItems;
      } else if (item.categoryId === 3) {
        toolsCount += item.removedItems;
      } else if (item.categoryId === 4) {
        electronicsCount += item.removedItems;
      } else if (item.categoryId === 5) {
        toysCount += item.toysCount;
      }
    });

    return (
      <BadgeReward
        stateTotal={this.state.posts.length}
        totalPosts={totalPosts}
        itemsCount={itemsCount}
        clothingCount={clothingCount}
        furnitureCount={furnitureCount}
        electronicsCount={electronicsCount}
        toolsCount={toolsCount}
        toysCount={toysCount}
        miscCount={miscCount}
      />
    );
  }
}

export default BadgeFunctions;
