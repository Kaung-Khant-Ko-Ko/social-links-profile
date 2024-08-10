import { useState } from "react";

function Button(props) {
  const [isDefault, change] = useState(true);
  const handleClick = () => {
    window.open(props.link, "_self");
  };
  const handleHover = () => {
    change(!isDefault);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`btn ${isDefault ? "default" : "on-hover"}`}
        onMouseOver={handleHover}
        onMouseLeave={handleHover}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;
