import React from 'react';
import Cpu from '../../../assets/cpu.svg';

import './category-button.css';

function categoryButton(props) {
  return (
    <div className={`${props.className} cat`}>
      <span className="cat-text">
        <img className="cat-logo" src={Cpu} alt="logo" />
        {props.text}
      </span>
    </div>
  );
}

export default categoryButton;
