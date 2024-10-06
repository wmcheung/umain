import "../app/globals.css";

import type { Preview } from "@storybook/react";
import React from "react";

import { sfPro } from "../lib/fonts";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <div
          className={sfPro.variable}
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#FAFAFA" },
        { name: "dark", value: "#000" },
      ],
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
