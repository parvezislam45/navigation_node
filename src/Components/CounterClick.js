import React, { Component } from "react";

class CounterClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState((preState) => {
      return { count: preState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <div className="card w-96 bg-neutral text-neutral-content mx-auto mt-16">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-5xl">{this.state.count}</h2>
            <button
              onClick={() => this.clickHandler()}
              className="btn btn-outline btn-secondary w-28 mt-10"
            >
              Click
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterClick;
