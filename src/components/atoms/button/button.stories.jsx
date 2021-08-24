import React from 'react';

import Button from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  text: 'apply',
  size: 'small',
  backgroundColor: 'primary',
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Generate report',
  size: 'medium',
  backgroundColor: 'secondary',
};

export const LargeDocument = Template.bind({});
LargeDocument.args = {
  text: 'View report',
  size: 'large',
  backgroundColor: 'secondary',
  icon: 'document',
};

export const LargeVector = Template.bind({});
LargeVector.args = {
  text: 'Allocation impact',
  size: 'large',
  backgroundColor: 'success',
  icon: 'vector',
};
