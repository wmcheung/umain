import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Logo } from "./logo";

const meta = {
  title: "Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    dark: false,
  },
};

export const Dark: Story = {
  args: {
    dark: true,
  },
};
