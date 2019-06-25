import React, { Component } from "react";
import "./GoalPost.css";

class GoalPost extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      numberOfItems: null,
      categoryId: null
    };
  }
  onAddGoal = e => {
    e.preventDefault();
    const { pickedDay, pickedMonth, pickedYear } = this.props;
    const currentDate = `${pickedMonth} / ${pickedDay} / ${pickedYear}`;
    this.setState({ date: currentDate });
    const goal = {
      date: currentDate,
      text: this.state.text,
      categoryId: this.state.categoryId,
      numberOfItems: this.state.numberOfItems
    };

    this.props.createGoal(goal);
    this.goalForm.reset();
  };
  handleChange = event => {
    this.setState({ categoryId: event.target.value });
  };
  DropDownCategory = () => {
    const category = this.props.category;
    return (
      <select onChange={this.handleChange}>
        {category.map(cat => {
          return <option value={cat.categoryId}>{cat.categoryName}</option>;
        })}
      </select>
    );
  };
  onsetNumber = event => {
    this.setState({ numberOfItems: event.target.value });
  };
  onTextAdd = event => {
    this.setState({ text: event.target.value });
  };
  render() {
    const { pickedDay, pickedMonth, pickedYear } = this.props;
    return (
      <div id="goalContainer">
        <h1>set a goal</h1>
        <div id="goalForm">
          <p>select date from calendar</p>

          <p>
            <h3>
              {pickedMonth} / {pickedDay} / {pickedYear}
            </h3>
          </p>
          <div> {this.DropDownCategory()}</div>
          <form
            className="forms"
            ref={input => (this.goalForm = input)}
            onSubmit={e => this.onAddGoal(e)}
          >
            <input
              className="numberOfItems"
              type="text"
              placeholder="# of items to remove "
              onChange={this.onsetNumber}
            />

            <textarea
              id="goalText"
              placeholder="Item(s) description"
              onChange={this.onTextAdd}
            />
            <br />
            <button type="submit" onClick={e => this.onAddGoal(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalPost;
