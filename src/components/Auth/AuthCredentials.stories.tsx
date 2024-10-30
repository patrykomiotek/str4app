import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AuthCredentials } from "./AuthCredentials";
import { AuthProvider } from "./AuthContext";

const meta = {
  title: "Components/AuthCredentials",
  component: AuthCredentials,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof AuthCredentials>;

export default meta;
// type Story = StoryObj<typeof meta>;

export const _AuthCredentials = () => (
  <AuthProvider>
    <AuthCredentials />
  </AuthProvider>
);
