import type { Meta, StoryObj } from "@storybook/react";

import { FoodCard } from "./food-card";

const meta = {
  title: "FoodCard",
  component: FoodCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FoodCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Hamburgers",
    isActive: false,
    imageSrc:
      "https://work-test-web-2024-eze6j4scpq-lz.a.run.app//images/hamburger.png",
  },
};

export const Active: Story = {
  args: {
    title: "Hamburgers",
    isActive: true,
    imageSrc:
      "https://work-test-web-2024-eze6j4scpq-lz.a.run.app//images/hamburger.png",
  },
};
