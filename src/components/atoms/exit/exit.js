import React from 'react';
import Exit from '../../../assets/exit.svg';
import './exit.css';

function exit() {
  return (
    <div className="Exit-logo-outer">
      <img className="Exit-logo" src={Exit} alt="logo" />
    </div>
  );
}

export default exit;
