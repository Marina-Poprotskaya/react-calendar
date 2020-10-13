import React from 'react';
import PropTypes from 'prop-types';
import { Clock } from '../clock/component';
import './style.css';

export default function Header({ onFormatedMonth }) {
  return (
    <header className="header">
      <div className="date-container">
        <Clock />
        <div className="currentDate">{onFormatedMonth()}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onFormatedMonth: PropTypes.func,
};
