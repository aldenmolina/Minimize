import React, { Component } from 'react';
import Calendar from './Calendar';
import Goal from './Goal.js';
import './GoalsPageContainer.css';

class GoalsPageContainer extends Component {
  constructor() {
    super();
    {
      this.state = {
        goals: [{}],
        category: []
      };
    }
  }
  componentDidMount() {
    fetch('https://localhost:44387/api/goal')
      .then(res => res.json())

      .then(data => this.setState({ goals: data }));

    this.getCategory();
  }
  getCategory = () => {
    fetch('https://localhost:44387/api/category')
      .then(res => res.json())
      .then(data =>
        data.map(cat => {
          const totalPosts = cat.posts.reduce(
            (accumulated, currentPost) =>
              accumulated + currentPost.removedItems,
            0
          );
          const test = {
            categoryId: cat.categoryId,
            categoryName: cat.categoryName,
            removedItem: totalPosts
          };
          const spreadCategory = [...this.state.category, test];
          this.setState({ category: spreadCategory });
        })
      );
  };
  createGoal = goal => {
    const currentGoals = [...this.state.goals, goal];

    this.setState({ goals: currentGoals });
    console.log(this.state.goals);

    fetch('https://localhost:44387/api/goal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goal)
    }).then(res => {
      if (res.ok) {
        const currentGoals = [...this.state.goals, goal];
        const setNewGoal = Object.assign([], this.state.goals, {
          goals: currentGoals
        });
        this.setState({ goals: setNewGoal });
      }
    });
  };

  render() {
    const PrintGoal = this.state.goals.map(goal => (
      <Goal
        date={goal.date}
        numberOfItems={goal.numberOfItems}
        text={goal.text}
        category={Object.assign([], goal.category)}
      />
    ));
    return (
      <div id="container">
        <Calendar createGoal={this.createGoal} category={this.state.category} />
        <div className="goalListContainer">
        <div id="goalList">{PrintGoal}</div>
      </div>
      </div>
    );
  }
}

export default GoalsPageContainer;
