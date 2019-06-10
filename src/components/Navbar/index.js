import React, { Component } from "react";
import "./style.css";


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div class="row">
          
            <div class="col-md-4">
              {this.props.message}</div>
            <div class="col-md-2">
              <p className="card-text">Score: {this.props.count}</p>
              </div>
              <div class="col-md-2">
              <p className="card-text">TopScore: {this.props.topScore}</p>
            </div>
            <div class="col-md-4">
              <a href="/" id="start">Start Again</a>
            </div>
          </div>
      </nav>

    )
  }
}

export default Navbar;
