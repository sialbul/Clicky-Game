import React from "react";

function Counter(props) {
  return (
    <div>
      <p className="card-text">Click Count: {props.count}</p>
    </div>
  );
}

export default Counter;
