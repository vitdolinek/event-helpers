import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import YellowBox from "./YellowBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Grepolis/YellowBox",
  component: YellowBox,
} as ComponentMeta<any>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof YellowBox> = (args) => (
  <YellowBox {...args} />
);
