import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Chip } from "./chip";

const meta = {
  title: "Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    isActive: false,
    children: "Take-away",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    isActive: false,
    children: "Take-away",
  },
};
export const Round: Story = {
  args: {
    size: "round",
    isActive: false,
    children: "Take-away",
  },
};

export const Active: Story = {
  args: {
    size: "small",
    isActive: true,
    children: "Take-away",
  },
};
