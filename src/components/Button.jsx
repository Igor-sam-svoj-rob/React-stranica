import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, onClick, buttonStyle, buttonSize }) => {
  const styles = ["btn-primary", "btn-outline"];
  const sizes = ["btn-medium", "btn-large"];

  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];
  const checkButtonSizes = styles.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Link to="/kontakt" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
