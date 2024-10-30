import type { Preview } from "@storybook/react";
// import { MockedProvider } from "@apollo/client/testing";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Organisms"],
        method: "numeric",
      },
    },
    // apolloClient: {
    //   MockedProvider,
    //   globalMocks: [
    //     // whatever mocks you want here
    //   ],
    // },
  },
};

export default preview;
