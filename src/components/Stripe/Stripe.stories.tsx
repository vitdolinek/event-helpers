import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stripe from "./Stripe";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Grepolis/Stripe",
  component: Stripe,
} as ComponentMeta<any>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof Stripe> = (args) => (
  <Stripe {...args} />
);
