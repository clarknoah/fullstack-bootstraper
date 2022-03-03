---
to: src/components/<%= name %>/stories.tsx
---

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= name %> from "./"


export default {
  title: '<%= name %>',
  component: <%= name %>,
  argTypes: {
      // Set Args that can be configured directly
  },
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});

Primary.args = {

};

