import React, { useContext } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteProfile from '../ui/DeleteProfile';

export default {
  title: 'DeleteProfile',
  component: DeleteProfile,
} as ComponentMeta<typeof DeleteProfile>;

const Template: ComponentStory<typeof DeleteProfile> = (args) => <DeleteProfile {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  isShowDeleteProfile: false,
};

