import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Card } from "./card";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    intent: "filled",
    children: "Hello World",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    intent: "filled",
    children: "Hello World",
  },
};

export const XL: Story = {
  args: {
    size: "xl",
    intent: "filled",
    children: "Hello World",
  },
};
