import React from "react";
import {Clock} from "../clock/component";
import PropTypes from "prop-types";
import "./style.css";

export default function Header({ onFormaredMonth }) {
  return (
    <header className="header">
      <div className="date-container">
        <Clock />
        <div className="currentDate">{onFormaredMonth()}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onFormaredMonth: PropTypes.func,
};
