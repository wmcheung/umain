import type { Meta, StoryObj } from "@storybook/react";

import { RestaurantCard } from "./restaurant-card";

const meta = {
  title: "RestaurantCard",
  component: RestaurantCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RestaurantCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OpenRestaurant: Story = {
  args: {
    status: "open",
    deliveryTime: "30 min",
    title: "Waynes Coffee",
    imageSrc:
      "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/images/coffee.png",
  },
};

export const ClosedRestaurant: Story = {
  args: {
    status: "closed",
    deliveryTime: "30 min",
    title: "Waynes Coffee",
    imageSrc:
      "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/images/coffee.png",
  },
};
