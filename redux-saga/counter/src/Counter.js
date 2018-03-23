import React from "react";

class Counter extends React.Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <div>
        Count: {value} <br />
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
