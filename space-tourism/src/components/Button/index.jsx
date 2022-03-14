import React from "react";
import "./index.scss";

function Button(props) {
  const { name } = props;
  return (
    <div>
      <button className="btn">{name}</button>
    </div>
  );
}

export default Button;
