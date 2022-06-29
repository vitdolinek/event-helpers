import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResourceIndicator from "./ResourceIndicator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Grepolis/ResourceIndicator",
  component: ResourceIndicator,
} as ComponentMeta<any>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof ResourceIndicator> = (
  args: any
) => <ResourceIndicator {...args} />;
