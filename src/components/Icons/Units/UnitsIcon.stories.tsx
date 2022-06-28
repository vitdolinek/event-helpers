import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UnitsIcon from "./UnitsIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Grepolis/UnitsIcon",
  component: UnitsIcon,
} as ComponentMeta<typeof UnitsIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof UnitsIcon> = (args) => (
  <UnitsIcon {...args} />
);
