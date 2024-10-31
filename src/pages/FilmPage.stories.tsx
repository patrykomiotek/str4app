import type { Meta, StoryObj } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing";

import { FilmsPage } from "./FilmsPage";
import { getFilms } from "../__mocks__/getFilms.mock";

const meta = {
  title: "Pages/FilmsPage",
  component: FilmsPage,
} satisfies Meta<typeof FilmsPage>;

export default meta;
// type Story = StoryObj<typeof meta>;

export const _FilmsPage = () => (
  <MockedProvider mocks={getFilms} addTypename={false}>
    <FilmsPage />
  </MockedProvider>
);
