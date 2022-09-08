import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '../Label';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  isDelAllowed: true,
  children: 'Romanticism',
};
