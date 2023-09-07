import React from 'react';
import './Button.scss';

function Button() {
  function handleSignUpClick() {
    window.open('https://backend-vickery.guspriaman.com/', '_blank');
  }

  return (
    <div>
      <button type="button" className="btn" onClick={handleSignUpClick}>
        Sign up
      </button>
    </div>
  );
}

export default Button;
