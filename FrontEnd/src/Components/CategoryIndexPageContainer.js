import React, { Component } from "react";
import { GetAll } from "./Library/HelperFunctions";
import CategoryIndexPage from "./CategoryIndexPage";

class CategoryIndex extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    GetAll().then(json => this.setState({ categories: json }));
  }

  render() {
    return <CategoryIndexPage categories={this.state.categories} />;
  }
}

export default CategoryIndex;
