import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from "."


export default {
  title: 'Example/Loader',
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Bounce = Template.bind({});
Bounce.args = {
  type: "BounceLoader", 
  color: "blue", 
  size: 150,
  height:150,
  width:150
};

export const Clip = Template.bind({});
Clip.args = {
  type: "ClipLoader", 
  color: "blue", 
  size: 150,
  height:150,
  width:150
};
export const Bar = Template.bind({});
Bar.args = {
  type: "BarLoader", 
  color: "blue", 
  size: 150,
  height:10,
  width:150
};

