import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from '../ui/CheckBox';

export default {
  title: 'CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  // checked: true,
};
