import React from "react";
import "./style.css";

function Header() {
    return (
        <header className="header">
            <h1><strong>Clicky Game!</strong></h1>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </header>
    );
}

export default Header;
