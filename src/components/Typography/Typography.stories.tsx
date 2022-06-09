import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Grepolis/Typography",
  component: Typography,
} as ComponentMeta<any>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Hello World</Typography>
);
