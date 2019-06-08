import React from "react";
import Counter from "../Counter";
import "./style.css";

  
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li class="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li class="resultMessage">You guessed correct!</li>
        <li class="score">
        <p className="card-text">Click Count:<Counter count={props.count}></Counter></p>
        </li>

      </ul>
    </nav>

  )

}

export default Navbar;
