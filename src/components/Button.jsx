import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to="/sign-up">
      <button type="button" className="btn">
        Sign Up
      </button>
    </Link>
  );
}

export default Button;
