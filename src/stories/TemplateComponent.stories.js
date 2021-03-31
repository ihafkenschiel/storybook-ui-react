// TemplateComponent.stories.js

import React from 'react';

import { TemplateComponent } from './TemplateComponent';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'TemplateComponent',
  component: TemplateComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TemplateComponent {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  argument1: true
};

export const SecondStory = Template.bind({});
SecondStory.args = {
  argument1: false
};