import React from 'react';

import Workflow from './workflow';

export default {
  title: 'Molecules/Workflow',
  component: Workflow,
  parameters: {
    layout: 'centered',
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Workflow {...args} />;

export const workflow = Template.bind({});
workflow.args = {
  text: 'workflow',
  first: 'Select component category',
  second: 'Select component type',
  third: 'Select region',
};
