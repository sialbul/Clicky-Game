import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Increment


      <div className="img-container">
          <span onClick={() => props.handleIncrement(props.id)} className="Increment">
            <img alt={props.name} src={props.image} />
          </span>
        </div>
      </button>

    </div>
  );
}

export default FriendCard;
