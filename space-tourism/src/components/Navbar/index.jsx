import React from "react";
import Button from "../Button";
import Logo from "./logo";
import "./index.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <Logo />
      <div className="nav-container__second">
        <div className="btn-container">
          <Button name="00 Home" />
          <Button name="01 Destination" />
          <Button name="02 Crew" />
          <Button name="03 Technology" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
