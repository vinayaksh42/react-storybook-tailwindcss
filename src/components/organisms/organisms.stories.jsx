import React from 'react';

import Organisms from './organisms';

export default {
  title: 'Organisms/Organisms',
  component: Organisms,
  parameters: {
    layout: 'centered',
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Organisms {...args} />;

export const organisms = Template.bind({});
organisms.args = {
};
