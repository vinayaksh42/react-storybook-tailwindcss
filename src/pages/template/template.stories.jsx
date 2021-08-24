import React from 'react';

import TemplateFinal from './template';

export default {
  title: 'Template/TemplateFinal',
  component: TemplateFinal,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <TemplateFinal {...args} />;

export const template = Template.bind({});
template.args = {
};
