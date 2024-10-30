import type { Preview } from "@storybook/react";
// import { MockedProvider } from "@apollo/client/testing";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
