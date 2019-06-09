import React from "react";
import "./style.css";
//pass the image into each card so all 12 are rendered
const FriendCard = props => (
    <div className="card">
      <button className="btn btn-primary" onClick={props.clickedImage}>
      {props.name}
      <div className="img-container">
          <span onClick={props.clickedImage} className="Increment">
            <img alt={props.image.replace("","")} src={props.image} />
          </span>
        </div>
      </button>

    </div>
  );

export default FriendCard;
