import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResourceIcon from "./ResourceIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Grepolis/ResourceIcon",
  component: ResourceIcon,
} as ComponentMeta<typeof ResourceIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof ResourceIcon> = (args) => (
  <ResourceIcon {...args} />
);
