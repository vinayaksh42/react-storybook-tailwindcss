import React from 'react';
import './organisms.css';
import Workflow from '../molecules/workflow/workflow';
import Upload from '../atoms/upload/upload';
import Exit from '../atoms/exit/exit';

function organisms() {
  return (
    <div className="org">
      <Workflow
        text="workflow"
        first="Select component category"
        second="Select component type"
        third="Select region"
      />
      <hr className="divider" />
      <Workflow
        text="Preference"
        first="Select regions and plants"
        second="Select types and components"
        third="Select suppliers"
      />
      <div className="bot">
        <hr className="bot-divider" />
        <Upload />
        <Upload />
        <Exit />
      </div>
    </div>
  );
}

export default organisms;
