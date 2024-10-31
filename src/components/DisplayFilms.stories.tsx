import type { Meta, StoryObj } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing";

import { DisplayFilms } from "./DisplayFilms";
import { getFilms } from "../__mocks__/getFilms.mock";

const meta = {
  title: "Components/DisplayFilms",
  component: DisplayFilms,
} satisfies Meta<typeof DisplayFilms>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _DisplayFilms: Story = {
  args: {
    data: getFilms[0].result.data,
  },
};
