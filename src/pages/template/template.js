import React from 'react';
import './template.css';
import Organisms from '../../components/organisms/organisms';

function template() {
  return (
    <div className="template">
      <span className="right">
        <Organisms />
      </span>
      <ul>
        <li><a href="#temp">Logo</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#temp">MENU ITEM</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#temp">MENU ITEM</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#temp">MENU ITEM</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#temp">MENU ITEM</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#temp">MENU ITEM</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#temp">MENU ITEM</a></li>
      </ul>
    </div>
  );
}

export default template;
