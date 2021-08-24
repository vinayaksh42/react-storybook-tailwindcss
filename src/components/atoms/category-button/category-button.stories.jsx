import React from 'react';

import CategoryButton from './category-button';

export default {
  title: 'Atoms/CategoryButton',
  component: CategoryButton,
  parameters: {
    layout: 'centered',
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CategoryButton {...args} />;

export const Categorybutton = Template.bind({});
Categorybutton.args = {
  text: 'Select component category',
};
