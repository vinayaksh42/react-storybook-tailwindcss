import React from 'react';
import './workflow.css';
import CategoryButton from '../../atoms/category-button/category-button';
import Button from '../../atoms/button/button';

function workflow(props) {
  return (
    <div className="workflow">
      <p className="text">
        {props.text}
      </p>
      <div className="btn-spacing">
        <CategoryButton text={`${props.first}`} />
      </div>
      <div className="btn-spacing">
        <CategoryButton text={`${props.second}`} />
      </div>
      <div className="btn-spacing">
        <CategoryButton text={`${props.third}`} />
      </div>
      <div className="btn-spacing">
        <Button text="View report" size="large" icon="document" />
      </div>
      <div className="btn-spacing">
        <Button text="Allocation impact" backgroundColor="success" size="large" icon="vector" />
      </div>
    </div>
  );
}

export default workflow;
