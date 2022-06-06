import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GPWindow from "./GPWindow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/GPWindow",
  component: GPWindow,
} as ComponentMeta<any>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof GPWindow> = (args) => (
  <GPWindow {...args} />
);
